import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
const backendUrl = process.env.REACT_APP_BACKEND_URL;
// Helper: Replace placeholders
const replacePlaceholders = (html, data) => {
  let content = html;
  for (const key in data) {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    content = content.replace(regex, data[key]);
  }
  return content;
};

const Issuance = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');

  // ✅ Add standard certificate fields
  const [courseName, setCourseName] = useState('');
  const [duration, setDuration] = useState('');
  const [completionDate, setCompletionDate] = useState('');

  const [dynamicFields, setDynamicFields] = useState({});
  const [previewHtml, setPreviewHtml] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [issuedCert, setIssuedCert] = useState(null); // For download

  const selectedTemplate = templates.find(t => t.id === parseInt(selectedTemplateId));

  // Load templates
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        try {
          const token = await firebaseUser.getIdToken(true);
          const res = await fetch(`${backendUrl}/api/templates`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const data = await res.json();
          setTemplates(data);
        } catch (err) {
          console.error("Failed to fetch templates:", err);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const extractPlaceholders = (html) => {
    const matches = html.match(/{{\s*[\w]+\s*}}/g);
    return matches ? [...new Set(matches.map(m => m.replace(/{{\s*|\s*}}/g, '')))] : [];
  };

  // When template changes
  useEffect(() => {
    if (selectedTemplate) {
      const placeholders = extractPlaceholders(selectedTemplate.htmlContent);
      const initFields = {};
      placeholders.forEach(ph => {
        if (![
          'recipientName', 'issuerName', 'issueDate',
          'certificateId', 'qrCodeUrl',
          'courseName', 'duration', 'completionDate'
        ].includes(ph)) {
          initFields[ph] = '';
        }
      });
      setDynamicFields(initFields);
      updatePreview(initFields);
    } else {
      setDynamicFields({});
      setPreviewHtml('');
    }
  });

  // When fields change
  useEffect(() => {
    updatePreview(dynamicFields);
  });

  const updatePreview = (fields) => {
    if (!selectedTemplate) return;
    const data = {
      recipientName: recipientEmail.split('@')[0] || '',
      issuerName: 'SkillCertify',
      issueDate: new Date().toLocaleDateString(),
      courseName,
      duration,
      completionDate,
      ...fields,
    };
    setPreviewHtml(replacePlaceholders(selectedTemplate.htmlContent, data));
  };

  const handleDynamicFieldChange = (key, value) => {
    setDynamicFields(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmSubmit = async () => {
    try {
      const token = await user.getIdToken(true);
      const payload = {
        title: selectedTemplate.title,
        description: selectedTemplate.description,
        recipientEmail,
        templateId: selectedTemplate.id,
        validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        courseName,
        duration,
        completionDate,
        ...dynamicFields,
      };

      const res = await fetch(`${backendUrl}/api/certificates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`✅ Certificate issued!\nID: ${data.certificate.certificateId}`);
        setIssuedCert(data.certificate);
      } else {
        alert(`❌ Failed: ${data.error}`);
      }
    } catch (err) {
      console.error('Issuance error:', err);
      alert('An error occurred.');
    } finally {
      setShowConfirmation(false);
    }
  };

  const cancelSubmit = () => setShowConfirmation(false);

  if (loading) return <div className="p-10 text-white">Loading templates...</div>;
  if (!user) return <div className="p-10 text-white">Please log in to access this page.</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Issue Certificate
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              Template:
              <select
                className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                value={selectedTemplateId}
                onChange={e => setSelectedTemplateId(e.target.value)}
                required
              >
                <option value="">-- Select Template --</option>
                {templates.map(t => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </label>

            <label className="block">
              Recipient Email:
              <input
                type="email"
                className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                value={recipientEmail}
                onChange={e => setRecipientEmail(e.target.value)}
                required
              />
            </label>

            {/* Standard Fields */}
            <label className="block">
              Course Name:
              <input
                type="text"
                className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                value={courseName}
                onChange={e => setCourseName(e.target.value)}
                required
              />
            </label>

            <label className="block">
              Duration (hours):
              <input
                type="number"
                className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                required
              />
            </label>

            <label className="block">
              Completion Date:
              <input
                type="text"
                placeholder="e.g. June 18, 2025"
                className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                value={completionDate}
                onChange={e => setCompletionDate(e.target.value)}
                required
              />
            </label>

            {/* Dynamic Fields */}
            {Object.keys(dynamicFields).map(key => (
              <label key={key} className="block">
                {key}:
                <input
                  type="text"
                  className="w-full p-2 mt-1 bg-gray-700 border border-gray-600 rounded"
                  value={dynamicFields[key]}
                  onChange={e => handleDynamicFieldChange(key, e.target.value)}
                />
              </label>
            ))}

            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700"
            >
              Issue Certificate
            </button>

            {issuedCert && (
              <a
                href={`${backendUrl}/api/certificates/${issuedCert.id}/download`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Download PDF
              </a>
            )}
          </form>
        </div>

        {/* Preview */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Live Preview</h2>
          {selectedTemplateId ? (
            <iframe
              srcDoc={previewHtml}
              title="Preview"
              className="w-full h-[500px] border-none bg-white"
            />
          ) : (
            <p className="text-gray-400">Select a template to see preview.</p>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 text-center">
            <p>Issue certificate to <strong>{recipientEmail}</strong>?</p>
            <div className="mt-4 flex justify-center gap-4">
              <button onClick={confirmSubmit} className="px-6 py-2 bg-green-600 rounded">Confirm</button>
              <button onClick={cancelSubmit} className="px-6 py-2 bg-red-600 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Issuance;

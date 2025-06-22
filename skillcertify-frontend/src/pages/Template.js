import React, { useState } from 'react';
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const Template = () => {
  const [templateTitle, setTemplateTitle] = useState('');
  const [description, setDescription] = useState('');
  const [htmlContent, setHtmlContent] = useState(`
    <!-- Example: this is what your template HTML might look like -->
    <div style="background:#1f2937; color:white; padding:2rem; border-radius:1rem; text-align:center; font-family:sans-serif">
      <h1 style="font-size:2rem; font-weight:bold;">Certificate of Completion</h1>
      <p>This certifies that <strong>{{recipientName}}</strong> has completed the <em>{{courseName}}</em> course.</p>
      <p>Issued by <strong>{{issuerName}}</strong> on {{issueDate}}</p>
      <p>Certificate ID: <strong>{{certificateId}}</strong></p>
      <p><img src="{{qrCodeUrl}}" alt="QR Code"/></p>
    </div>
  `);

  // ✅ Always use these placeholders: backend fills them when issuing
  const placeholderTags = [
    '{{recipientName}}',
    '{{courseName}}',
    '{{issuerName}}',
    '{{issueDate}}',
    '{{certificateId}}',
    '{{completionDate}}',
    '{{duration}}',
    '{{qrCodeUrl}}',
  ];

  // 👇 Sample values for live preview ONLY
  const sampleData = {
    recipientName: 'John Doe',
    courseName: 'React Bootcamp',
    issuerName: 'SkillCertify',
    issueDate: new Date().toLocaleDateString(),
    certificateId: 'CERT-2025-001',
    completionDate: '2025-12-31',
    duration: '20 hours',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=VerifyMe',
  };

  // Replace placeholders for preview only — backend handles real replacement
  const renderPreview = () => {
    let preview = htmlContent;
    Object.entries(sampleData).forEach(([key, value]) => {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
      preview = preview.replace(regex, value);
    });
    return preview;
  };

  // ✅ When saving, send the raw HTML WITH placeholders intact
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${backendUrl}/api/templates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        // 👇 Note: Save HTML with placeholders, NOT the preview!
        body: JSON.stringify({ title: templateTitle, description, htmlContent }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('✅ Template created successfully!');
        setTemplateTitle('');
        setDescription('');
        setHtmlContent('');
      } else {
        alert(data.error || '❌ Template creation failed.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('❌ Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Create Certificate Template
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Template Title</label>
            <input
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              value={templateTitle}
              onChange={(e) => setTemplateTitle(e.target.value)}
              required
              placeholder="e.g., Certificate for React Course"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              className="w-full p-3 rounded bg-gray-700 border border-gray-600"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Awarded for completing the React Bootcamp"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">HTML Template (Use Placeholders)</label>
            <textarea
              rows="12"
              className="w-full p-3 font-mono rounded bg-gray-700 border border-gray-600"
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
              required
              placeholder="Enter HTML with placeholders like {{recipientName}}, {{qrCodeUrl}}..."
            />
            <p className="mt-2 text-sm text-gray-400">
              Note: Placeholders will be auto-filled when issuing the certificate.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-700 transition"
          >
            Save Template
          </button>
        </form>

        {/* SIDEBAR */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
            <h2 className="text-lg font-bold mb-3">Supported Placeholders</h2>
            <div className="flex flex-wrap gap-2">
              {placeholderTags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-700 px-3 py-1 rounded text-sm font-mono text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
            <h2 className="text-lg font-bold mb-3">Live Preview</h2>
            <iframe
              srcDoc={renderPreview()}
              sandbox="allow-same-origin"
              className="w-full h-[500px] border-none bg-white rounded-md"
              title="Template Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;

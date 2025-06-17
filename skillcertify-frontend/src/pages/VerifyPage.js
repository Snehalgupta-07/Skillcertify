import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VerifyPage = () => {
  const { hash } = useParams();
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
  const fetchCertificate = async () => {
    const res = await fetch(`http://localhost:5000/api/verify/${hash}`);
    const data = await res.json();
    if (data.valid) {
      setCertificate(data.certificate); // FIX: only the cert part
    } else {
      // handle invalid cert
    }
  };
  fetchCertificate();
}, [hash]);

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading certificate for verification...
      </div>
    );
  }

  // Replace placeholders in the fetched HTML template
  const htmlContent = replacePlaceholders(certificate.template.htmlContent, {
    recipientName: certificate.recipientName || '',
    issuerName: certificate.issuer?.email || '',
    issueDate: new Date(certificate.issuedAt).toLocaleDateString(),
    certificateId: certificate.certificateId || '',
    qrCodeUrl: certificate.qrCode || '',
    // Add more if your template has more placeholders
  });

  return (
    <div className="min-h-screen bg-gray-900 font-inter text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Certificate Verification
      </h1>

      <div className="max-w-7xl w-full mx-auto bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 border border-gray-700 flex flex-col lg:flex-row gap-8">
        {/* Certificate Preview */}
        <div className="flex-1 flex items-center justify-center bg-white rounded-xl overflow-auto border border-gray-700 shadow-lg max-h-[80vh]">
          <iframe
            title={certificate.title}
            srcDoc={htmlContent}
            sandbox="allow-same-origin allow-scripts"
            className="w-[800px] h-[1130px] border-none rounded shadow"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>

        {/* Verification Details */}
        <div className="lg:w-1/3 flex flex-col space-y-6 bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
          {/* Verified Badge */}
          <div className="p-5 bg-gradient-to-br from-green-700 to-emerald-800 rounded-xl text-center shadow-lg">
            <svg className="w-12 h-12 mx-auto mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-1.09L11.5 11.47l-1.95-1.95a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">
              Certificate Verified!
            </h3>
            <p className="text-gray-200 text-sm">
              This certificate is digitally verified by SkillCertify.
            </p>
          </div>

          {/* Certificate Details */}
          <div className="p-5 bg-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Certificate Information</h3>
            <div className="text-sm space-y-2 text-gray-300">
              <p><strong>Title:</strong> {certificate.title}</p>
              <p><strong>Issuer:</strong> {certificate.issuer?.email}</p>
              <p><strong>Issued On:</strong> {new Date(certificate.issuedAt).toLocaleDateString()}</p>
              <p><strong>Certificate ID:</strong> <span className="font-mono text-xs">{certificate.certificateId}</span></p>
            </div>
          </div>

          {/* Simple note for recruiter */}
          <div className="p-5 bg-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">How to Verify</h3>
            <p className="text-gray-300 text-sm">
              This page confirms the certificate is authentic and issued by SkillCertify.
              If you have questions, contact the issuer directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper: Replace placeholders
function replacePlaceholders(html, data) {
  let output = html;
  Object.entries(data).forEach(([key, value]) => {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    output = output.replace(regex, value ?? '');
  });
  return output;
}

export default VerifyPage;

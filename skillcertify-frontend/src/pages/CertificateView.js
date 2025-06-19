import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CertificateView = () => {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/certificates/${id}`);
        const data = await res.json();
        setCertificate(data);
      } catch (err) {
        console.error('Error fetching certificate:', err);
      }
    };
    fetchCertificate();
  }, [id]);

  const handleDownloadPdf = () => {
    window.open(`http://localhost:5000/api/certificates/${id}/download`, '_blank');
  };

  const handleShare = (platform) => {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(`Check out my ${certificate.title} from SkillCertify!`);
    let url = '';

    switch (platform) {
      case 'linkedin':
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href)
          .then(() => {
            setCopyStatus('Link copied!');
            setTimeout(() => setCopyStatus(''), 2000);
          })
          .catch(err => {
            console.error('Failed to copy:', err);
            setCopyStatus('Failed!');
          });
        return;
      default:
        return;
    }

    window.open(url, '_blank', 'width=600,height=400');
  };

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading certificate...
      </div>
    );
  }

  // Replaces all placeholders properly
  const htmlContent = replacePlaceholders(certificate.template.htmlContent, {
    recipientName: certificate.recipientName || '',
    courseName: certificate.courseName || '',
    duration: certificate.duration || '',
    completionDate: certificate.completionDate || '',
    issuerName: certificate.issuerName || certificate.issuer?.email || '',
    issueDate: new Date(certificate.issuedAt).toLocaleDateString(),
    certificateId: certificate.certificateId || '',
    qrCodeUrl: certificate.qrCodeUrl || '',
  });

  return (
    <div className="min-h-screen bg-gray-900 font-inter text-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        View Certificate
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

        {/* Actions & Info */}
        <div className="lg:w-1/3 flex flex-col space-y-6 bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
          {/* Verification */}
          <div className="p-5 bg-gradient-to-br from-green-700 to-emerald-800 rounded-xl text-center shadow-lg">
            <svg className="w-12 h-12 mx-auto mb-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-1.09L11.5 11.47l-1.95-1.95a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Certificate Verified!</h3>
            <p className="text-gray-200 text-sm">This certificate is digitally verified by SkillCertify.</p>
            <a
              href={`http://localhost:3000/verify/${certificate.verifyHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-blue-300 hover:underline hover:text-blue-200"
            >
              View Verification Details →
            </a>
          </div>

          {/* Info */}
          <div className="p-5 bg-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Certificate Info</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p><strong>Title:</strong> {certificate.title}</p>
              <p><strong>Issuer:</strong> {certificate.issuer?.email || certificate.issuerName}</p>
              <p><strong>Issued On:</strong> {new Date(certificate.issuedAt).toLocaleDateString()}</p>
              <p><strong>Expires On:</strong> {certificate.validUntil ? new Date(certificate.validUntil).toLocaleDateString() : 'N/A'}</p>
            </div>
          </div>

          {/* Download */}
          <button
            onClick={handleDownloadPdf}
            className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold rounded-xl shadow-lg hover:from-emerald-700 hover:to-teal-800 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            <span>Download PDF</span>
          </button>

          {/* Share */}
          <div className="p-5 bg-gray-700 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Share Certificate</h3>
            <div className="flex justify-center space-x-4 mb-4">
              {['linkedin', 'twitter', 'facebook', 'copy'].map(platform => (
                <button
                  key={platform}
                  onClick={() => handleShare(platform)}
                  className={`p-3 rounded-full transition transform hover:scale-110 ${
                    platform === 'linkedin' ? 'bg-blue-700 hover:bg-blue-800' :
                    platform === 'twitter' ? 'bg-blue-400 hover:bg-blue-500' :
                    platform === 'facebook' ? 'bg-blue-800 hover:bg-blue-900' :
                    'bg-gray-600 hover:bg-gray-700'
                  }`}
                  title={platform === 'copy' ? 'Copy Link' : `Share on ${platform}`}
                >
                  {/* Use basic icons: */}
                  {platform === 'linkedin' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.761-2.238-5-5-5zm-11 19h-3V8h3v11zm-1.5-12.27c-.966 0-1.75-.79-1.75-1.763S5.534 3.204 6.5 3.204s1.75.79 1.75 1.763-.784 1.763-1.75 1.763zm13.5 12.27h-3v-5.604c0-3.369-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                    </svg>
                  )}
                  {platform === 'twitter' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775 4.933 4.933 0 0 0 2.165-2.724 9.875 9.875 0 0 1-3.127 1.195A4.918 4.918 0 0 0 16.616 3c-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.763.128 1.124C7.728 8.822 4.1 6.79 1.671 3.771a4.916 4.916 0 0 0-.666 2.475c0 1.71.87 3.216 2.19 4.099A4.904 4.904 0 0 1 .964 9.14v.062c0 2.388 1.698 4.382 3.946 4.833a4.935 4.935 0 0 1-2.212.084c.623 1.945 2.432 3.362 4.576 3.402A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.058 0 14.01-7.514 14.01-14.01 0-.213-.004-.425-.014-.636A10.007 10.007 0 0 0 24 4.557z" />
                    </svg>
                  )}
                  {platform === 'facebook' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.351C0 23.407.593 24 1.324 24h11.495v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0" />
                    </svg>
                  )}
                  {platform === 'copy' && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
            {copyStatus && <p className="text-green-400 text-sm">{copyStatus}</p>}
            <p className="text-gray-400 text-xs">Share on your network or copy the link.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function replacePlaceholders(html, data) {
  let out = html;
  Object.entries(data).forEach(([key, val]) => {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    out = out.replace(regex, val ?? '');
  });
  return out;
}

export default CertificateView;

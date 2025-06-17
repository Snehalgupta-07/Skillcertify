import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const RecipientDashboard = () => {
  const [certificates, setCertificates] = useState([]);
  const [searchTerm, setSearchTerm]       = useState('');
  const [filterStatus, setFilterStatus]   = useState('All');
  const [hoveredId, setHoveredId]         = useState(null);
  const [loading, setLoading]             = useState(true);

  // Fetch recipient’s certificates on mount
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setCertificates([]);
        setLoading(false);
        return;
      }
      try {
        const token = await user.getIdToken(true);
        const res   = await fetch(
          'http://localhost:5000/api/recipients/certificates',
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        const data = await res.json();
        setCertificates(data);
      } catch (err) {
        console.error('Failed to fetch recipient certificates:', err);
      } finally {
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  // Helper: patch status on backend & update local state
  const updateStatus = async (id, newStatus) => {
    try {
      const token = await auth.currentUser.getIdToken(true);
      await fetch(
        `http://localhost:5000/api/certificates/${id}/status`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
    } catch (e) {
      console.error('Could not persist status change:', e);
    } finally {
      setCertificates((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, status: newStatus } : c
        )
      );
    }
  };

  // Handlers
const handleView = (cert) => {
    const url = `${window.location.origin}/view/${cert.id}`;
    window.open(url, '_blank');
    if (cert.status === 'Issued') {
      updateStatus(cert.id, 'Viewed');
    }
  };

  const handleDownload = (cert) => {
    const url = `http://localhost:5000/api/certificates/${cert.id}/download`;
    const a   = document.createElement('a');
    a.href    = url;
    a.download= `${cert.certificateId}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (cert.status !== 'Downloaded') {
      updateStatus(cert.id, 'Downloaded');
    }
  };

  // Filter & search
  const filtered = certificates.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.issuer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus =
      filterStatus === 'All' || c.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const statusClasses = (st) => {
    switch (st) {
      case 'Issued':     return 'bg-blue-600';
      case 'Viewed':     return 'bg-purple-600';
      case 'Downloaded': return 'bg-emerald-600';
      case 'Expired':    return 'bg-red-600';
      default:           return 'bg-gray-600';
    }
  };

  if (loading) 
    return <div className="p-8 text-white">Loading your certificates…</div>;

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        My Received Certificates
      </h1>

      <div className="max-w-7xl mx-auto bg-gray-800 rounded-xl border border-gray-700 p-6">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search by title or issuer…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-3 mb-4 md:mb-0 rounded bg-gray-700 border border-gray-600"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full md:w-1/3 p-3 rounded bg-gray-700 border border-gray-600"
          >
            <option value="All">All Statuses</option>
            <option value="Issued">Issued</option>
            <option value="Viewed">Viewed</option>
            <option value="Downloaded">Downloaded</option>
            <option value="Expired">Expired</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                {['Title','Issuer','Issue Date','Expiry','Status','Actions'].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-400">
                    No certificates found.
                  </td>
                </tr>
              )}
              {filtered.map((cert) => (
                <tr
                  key={cert.id}
                  className="hover:bg-gray-700 transition"
                >
                  <td className="px-6 py-4">{cert.title}</td>
                 <td className="px-6 py-4 text-gray-300">{cert.issuer}</td>
<td className="px-6 py-4 text-gray-300">{cert.issueDate ? new Date(cert.issueDate).toLocaleDateString() : 'N/A'}</td>
<td className="px-6 py-4 text-gray-300">{cert.expiryDate ? new Date(cert.expiryDate).toLocaleDateString() : 'N/A'}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-2 inline-flex text-xs font-semibold rounded-full ${statusClasses(
                        cert.status
                      )} text-white`}
                    > 
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center space-x-2">
                    <button
                      onClick={() => handleView(cert)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(cert)}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecipientDashboard;

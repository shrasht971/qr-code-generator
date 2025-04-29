import React from 'react';
import QRCode from 'react-qr-code';
import Navbar from '../components/Navbar';

const Dashboard: React.FC = () => {
  const url = "https://example.com";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">QR Code Generator</h3>
            <QRCode value={url} className="mx-auto" />
            <p className="text-sm text-center mt-2">QR for: {url}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Short Link (coming soon)</h3>
            <p className="text-sm">Use an API or backend for short link support.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
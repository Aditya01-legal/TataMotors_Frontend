import { useState } from 'react';
import axios from 'axios';

const DefectForm = () => {
  const [formData, setFormData] = useState({
    issueArea: '',
    issueDescription: '',
    partDescription: '',
    partNumber: '',
    supplierName: '',
    vendorCode: '',
    ica: '',
    rootCause: '',
    pca: '',
    pdc: '',
    status: '',
    responsibility: '',
    issueReportedBy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tatamotors-backend-2.onrender.com/api/defects/add', formData);
      alert('Defect submitted successfully');
      setFormData({
        issueArea: '',
        issueDescription: '',
        partDescription: '',
        partNumber: '',
        supplierName: '',
        vendorCode: '',
        ica: '',
        rootCause: '',
        pca: '',
        pdc: '',
        status: '',
        responsibility: '',
        issueReportedBy: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Submission failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Daily Issue Tracking</h2>

        <div className="mb-4">
          <label>Issue Reported Area:</label>
          <select name="issueArea" value={formData.issueArea} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required>
            <option value="">Select</option>
            <option value="LINE 1">LINE 1</option>
            <option value="LINE 2">LINE 2</option>
            <option value="LINE 3">LINE 3</option>
            <option value="NTL">NTL</option>
            <option value="PTL">PTL</option>
            <option value="FINAL">FINAL</option>
            <option value="ENGINE">ENGINE</option>
          </select>
        </div>

        <div className="mb-4">
          <label>Issue Description:</label>
          <textarea name="issueDescription" value={formData.issueDescription} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>Part Description:</label>
          <textarea name="partDescription" value={formData.partDescription} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>Part Number:</label>
          <input type="text" name="partNumber" value={formData.partNumber} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>Supplier Name:</label>
          <input type="text" name="supplierName" value={formData.supplierName} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>Vendor Code:</label>
          <input type="number" name="vendorCode" value={formData.vendorCode} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>ICA:</label>
          <textarea name="ica" value={formData.ica} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>Root Cause:</label>
          <textarea name="rootCause" value={formData.rootCause} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>PCA:</label>
          <textarea name="pca" value={formData.pca} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        {/* PDC moved here after PCA */}
        <div className="mb-4">
          <label>PDC (Date):</label>
          <input type="date" name="pdc" value={formData.pdc} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required>
            <option value="">Select</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        <div className="mb-4">
          <label>Responsibility:</label>
          <textarea name="responsibility" value={formData.responsibility} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <div className="mb-4">
          <label>Issue Reported By:</label>
          <textarea name="issueReportedBy" value={formData.issueReportedBy} onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded mt-1" required />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DefectForm;












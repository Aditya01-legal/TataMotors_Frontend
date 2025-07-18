// DefectForm.jsx (Frontend)
import React, { useState } from 'react';
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
    responsibility: '',
    issueReportedBy: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tatamotors-backend-2.onrender.com/api/defects/add', formData);
      alert('Defect submitted successfully');
      setFormData({
        issueArea: '', issueDescription: '', partDescription: '', partNumber: '',
        supplierName: '', vendorCode: '', ica: '', rootCause: '', pca: '',
        pdc: '', responsibility: '', issueReportedBy: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit defect');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Daily issue tracking</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label>Issue Reported Area</label>
          <select name="issueArea" value={formData.issueArea} onChange={handleChange} className="w-full border p-2">
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

        <textarea name="issueDescription" value={formData.issueDescription} onChange={handleChange} placeholder="Issue Description" className="border p-2" />
        <textarea name="partDescription" value={formData.partDescription} onChange={handleChange} placeholder="Part Description" className="border p-2" />
        <textarea name="partNumber" value={formData.partNumber} onChange={handleChange} placeholder="Part Number" className="border p-2" />
        <textarea name="supplierName" value={formData.supplierName} onChange={handleChange} placeholder="Supplier Name" className="border p-2" />
        <input type="number" name="vendorCode" value={formData.vendorCode} onChange={handleChange} placeholder="Vendor Code" className="border p-2" />
        <textarea name="ica" value={formData.ica} onChange={handleChange} placeholder="ICA (Action Initiated)" className="border p-2" />
        <textarea name="rootCause" value={formData.rootCause} onChange={handleChange} placeholder="Root Cause" className="border p-2" />
        <textarea name="pca" value={formData.pca} onChange={handleChange} placeholder="PCA" className="border p-2" />
        <input type="date" name="pdc" value={formData.pdc} onChange={handleChange} className="border p-2" />
        <textarea name="responsibility" value={formData.responsibility} onChange={handleChange} placeholder="Responsibility" className="border p-2" />
        <textarea name="issueReportedBy" value={formData.issueReportedBy} onChange={handleChange} placeholder="Issue Reported By" className="border p-2" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default DefectForm;










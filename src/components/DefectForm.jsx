import React, { useState } from "react";
import axios from "axios";

const DefectForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    issueReportedArea: "",
    issueDescription: "",
    partDescription: "",
    partNumber: "",
    supplierName: "",
    actionInitiated: "",
    rootCause: "",
    pca: "",
    status: "",
    responsibility: "",
    issueAttendedBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/defects/add`, formData);
      alert("Defect submitted successfully!");
      setFormData({
        date: "",
        issueReportedArea: "",
        issueDescription: "",
        partDescription: "",
        partNumber: "",
        supplierName: "",
        actionInitiated: "",
        rootCause: "",
        pca: "",
        status: "",
        responsibility: "",
        issueAttendedBy: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit defect.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <label>Issue Reported Area:</label>
      <select name="issueReportedArea" value={formData.issueReportedArea} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="LINE 1">LINE 1</option>
        <option value="LINE 2">LINE 2</option>
        <option value="LINE 3">LINE 3</option>
        <option value="NTL">NTL</option>
        <option value="PTL">PTL</option>
        <option value="FINAL">FINAL</option>
        <option value="ENGINE">ENGINE</option>
      </select>

      <label>Issue Description:</label>
      <textarea name="issueDescription" value={formData.issueDescription} onChange={handleChange} required />

      <label>Part Description:</label>
      <textarea name="partDescription" value={formData.partDescription} onChange={handleChange} required />

      <label>Part Number:</label>
      <textarea name="partNumber" value={formData.partNumber} onChange={handleChange} required />

      <label>Supplier Name:</label>
      <textarea name="supplierName" value={formData.supplierName} onChange={handleChange} required />

      <label>Action Initiated:</label>
      <textarea name="actionInitiated" value={formData.actionInitiated} onChange={handleChange} required />

      <label>Root Cause:</label>
      <textarea name="rootCause" value={formData.rootCause} onChange={handleChange} required />

      <label>PCA:</label>
      <textarea name="pca" value={formData.pca} onChange={handleChange} required />

      <label>Status:</label>
      <select name="status" value={formData.status} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="open">Open</option>
        <option value="closed">Closed</option>
        <option value="in progress">In Progress</option>
      </select>

      <label>Responsibility:</label>
      <select name="responsibility" value={formData.responsibility} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="KUNDAN KUMAR">KUNDAN KUMAR</option>
        <option value="SAURAV DATTA">SAURAV DATTA</option>
        <option value="SAURABHA SENAPATI">SAURABHA SENAPATI</option>
        <option value="BHASKAR BASU">BHASKAR BASU</option>
      </select>

      <label>Issue Attended By:</label>
      <textarea name="issueAttendedBy" value={formData.issueAttendedBy} onChange={handleChange} required />

      <button type="submit">Submit Defect</button>
    </form>
  );
};

export default DefectForm;









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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tatamotors-backend-2.onrender.com/api/defects/add",
        formData
      );
      alert("Defect added successfully!");
      setFormData({}); // reset if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Submission failed");
    }
  };

  const areas = ["LINE 1", "LINE 2", "LINE 3", "NTL", "PTL", "FINAL", "ENGINE"];
  const statuses = ["Open", "Closed", "In Progress"];
  const responsibilities = [
    "KUNDAN KUMAR",
    "SAURAV DATTA",
    "SAURABHA SENAPATI",
    "BHASKAR BASU",
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Defect Submission Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
          required
        />

        <select
          name="issueReportedArea"
          value={formData.issueReportedArea}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
          required
        >
          <option value="">Select Issue Reported Area</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>

        <textarea
          name="issueDescription"
          placeholder="Issue Description"
          value={formData.issueDescription}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
          required
        />

        <textarea
          name="partDescription"
          placeholder="Part Description"
          value={formData.partDescription}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="partNumber"
          placeholder="Part Number"
          value={formData.partNumber}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />

        <input
          type="text"
          name="supplierName"
          placeholder="Supplier Name"
          value={formData.supplierName}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />

        <textarea
          name="actionInitiated"
          placeholder="Action Initiated"
          value={formData.actionInitiated}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />

        <textarea
          name="rootCause"
          placeholder="Root Cause"
          value={formData.rootCause}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />

        <textarea
          name="pca"
          placeholder="PCA"
          value={formData.pca}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
          required
        >
          <option value="">Select Status</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          name="responsibility"
          value={formData.responsibility}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
          required
        >
          <option value="">Select Responsibility</option>
          {responsibilities.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="issueAttendedBy"
          placeholder="Issue Attended By"
          value={formData.issueAttendedBy}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white col-span-full"
        />

        <button
          type="submit"
          className="col-span-full bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded text-white mt-2"
        >
          Submit Defect
        </button>
      </form>
    </div>
  );
};

export default DefectForm;










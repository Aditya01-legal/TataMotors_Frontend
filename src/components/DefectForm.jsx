import React, { useState } from "react";
import axios from "axios";

const DefectForm = () => {
  const [formData, setFormData] = useState({
    vehicleSystem: "",
    vehicleSystemOther: "",
    severity: "",
    status: "",
    vehicleModel: "",
    vehicleModelOther: "",
    assignedTo: "",
    reportedBy: "",
    reportedOn: "",
    resolutionDate: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("Max 5MB file allowed");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://tatamotors-backend-2.onrender.com/api/defects/add", formData);

      alert("Defect submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed. Check console.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Defect Logging Form</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {/* Vehicle System Dropdown */}
        <select name="vehicleSystem" value={formData.vehicleSystem} onChange={handleChange} required className="p-2 rounded bg-gray-800 border border-gray-600">
          <option value="">Select Vehicle System</option>
          <option>Engine</option>
          <option>Transmission</option>
          <option>Brakes</option>
          <option>Suspension</option>
          <option>Electrical</option>
          <option>Others</option>
        </select>

        {/* Show "Other Vehicle System" if 'Others' selected */}
        {formData.vehicleSystem === "Others" && (
          <input name="vehicleSystemOther" placeholder="Other Vehicle System" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-600" />
        )}

        {/* Severity Dropdown */}
        <select name="severity" value={formData.severity} onChange={handleChange} required className="p-2 rounded bg-gray-800 border border-gray-600">
          <option value="">Select Severity</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>

        {/* Status Dropdown */}
        <select name="status" value={formData.status} onChange={handleChange} required className="p-2 rounded bg-gray-800 border border-gray-600">
          <option value="">Select Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Closed</option>
        </select>

        {/* Vehicle Model Dropdown */}
        <select name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required className="p-2 rounded bg-gray-800 border border-gray-600">
          <option value="">Select Vehicle Model</option>
          <option>Model A</option>
          <option>Model B</option>
          <option>Model C</option>
          <option>Other</option>
        </select>

        {/* Show "Other Vehicle Model" if 'Other' selected */}
        {formData.vehicleModel === "Other" && (
          <input name="vehicleModelOther" placeholder="Other Vehicle Model" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-600" />
        )}

        <input name="assignedTo" placeholder="Assigned To" onChange={handleChange} required className="p-2 rounded bg-gray-800 border border-gray-600" />
        <input name="reportedBy" placeholder="Reported By" onChange={handleChange} required className="p-2 rounded bg-gray-800 border border-gray-600" />
        <input type="date" name="reportedOn" onChange={handleChange} required className="p-2 rounded bg-gray-800 border border-gray-600" />
        <input type="date" name="resolutionDate" onChange={handleChange} className="p-2 rounded bg-gray-800 border border-gray-600" />
        <textarea name="description" placeholder="Defect Description" onChange={handleChange} required className="p-2 rounded bg-gray-800 border border-gray-600"></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} className="p-2 rounded bg-gray-800 border border-gray-600" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
};

export default DefectForm;







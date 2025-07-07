import React, { useState } from 'react';
import axios from 'axios';

function DefectForm() {
  const [formData, setFormData] = useState({
    vehicleSystem: '',
    vehicleSystemOther: '',
    severity: 'Low',
    status: 'Open',
    vehicleModel: '',
    vehicleModelOther: '',
    assignedTo: '',
    reportedBy: '',
    reportedOn: new Date().toISOString().split('T')[0],
    resolutionDate: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      if (files[0]) reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/defects/add', formData);
    alert('✅ Defect added!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6"
    >
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Log New Defect</h2>

      {/* Vehicle System */}
      <label className="block mb-1">Vehicle System</label>
      <select
        name="vehicleSystem"
        value={formData.vehicleSystem}
        onChange={handleChange}
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
        required
      >
        <option value="">Select</option>
        <option>Engine</option>
        <option>Transmission</option>
        <option>Braking System</option>
        <option>Electrical System</option>
        <option>Fuel System</option>
        <option>Suspension</option>
        <option>Cabin Controls</option>
        <option>Exhaust/Emission</option>
        <option>Cooling System</option>
        <option>Steering System</option>
        <option>Others</option>
      </select>
      {formData.vehicleSystem === 'Others' && (
        <input
          type="text"
          name="vehicleSystemOther"
          placeholder="Specify if Others (Vehicle System)"
          className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={formData.vehicleSystemOther}
          onChange={handleChange}
        />
      )}

      {/* Severity */}
      <label className="block mb-1">Severity</label>
      <select
        name="severity"
        value={formData.severity}
        onChange={handleChange}
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      {/* Status */}
      <label className="block mb-1">Status</label>
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      {/* Vehicle Model */}
      <label className="block mb-1">Vehicle Model</label>
      <select
        name="vehicleModel"
        value={formData.vehicleModel}
        onChange={handleChange}
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
        required
      >
        <option value="">Select</option>
        <option>Prima 2825</option>
        <option>Prima 3530</option>
        <option>Prima 5530</option>
        <option>Other</option>
      </select>
      {formData.vehicleModel === 'Other' && (
        <input
          type="text"
          name="vehicleModelOther"
          placeholder="Specify if Others (Vehicle Model)"
          className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={formData.vehicleModelOther}
          onChange={handleChange}
        />
      )}

      {/* Assigned To */}
      <input
        name="assignedTo"
        placeholder="Assigned To"
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={formData.assignedTo}
        onChange={handleChange}
        required
      />

      {/* Reported By */}
      <input
        name="reportedBy"
        placeholder="Reported By"
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={formData.reportedBy}
        onChange={handleChange}
        required
      />

      {/* Reported On */}
      <input
        name="reportedOn"
        type="date"
        value={formData.reportedOn}
        readOnly
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {/* Resolution Date */}
      <input
        name="resolutionDate"
        type="date"
        value={formData.resolutionDate}
        onChange={handleChange}
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Defect Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full mb-3 p-2 rounded border dark:bg-gray-700 dark:text-white dark:border-gray-600"
        required
      ></textarea>

      {/* Upload Image */}
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default DefectForm;





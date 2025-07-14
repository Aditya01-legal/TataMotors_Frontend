import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DefectList({ filter }) {
  const [defects, setDefects] = useState([]);

  useEffect(() => {
    fetchDefects();
  }, []);

  const fetchDefects = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/defects`);

    setDefects(response.data);
  };

  const handleDelete = async (id) => {
    alert(`Delete function not yet implemented for ID ${id}`);
  };

  const filteredDefects =
    filter === 'All' ? defects : defects.filter((d) => d.status === filter);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Filtered Defects</h2>
      {filteredDefects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No defects found.</p>
      ) : (
        <table className="w-full border text-sm text-left dark:text-gray-200">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDefects.map((defect) => (
              <tr key={defect.id}>
                <td className="p-2 border">{defect.id}</td>
                <td className="p-2 border">{defect.title}</td>
                <td className="p-2 border">{defect.description}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      defect.status === 'Open'
                        ? 'bg-red-100 text-red-600'
                        : 'bg-green-100 text-green-600'
                    }`}
                  >
                    {defect.status}
                  </span>
                </td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => handleDelete(defect.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DefectList;


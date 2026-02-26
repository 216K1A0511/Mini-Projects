import { useState } from 'react';

export default function ProjectModal({ isOpen, onClose }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    deadline: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
      setFormData({
        projectName: '',
        description: '',
        deadline: ''
      });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-lg max-w-md w-full p-6 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
        <h2 id="modalTitle" className="text-2xl font-bold mb-4 text-black">
          Start Your Film Project
        </h2>
        
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div>
              <label htmlFor="projectName" className="block font-semibold mb-1">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="description" className="block font-semibold mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <div>
              <label htmlFor="deadline" className="block font-semibold mb-1">
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1e56ff] hover:bg-[#1a4de6] transition text-white font-extrabold rounded-full px-6 py-3 text-center"
            >
              Create Project
            </button>
          </form>
        ) : (
          <div className="mt-4 text-green-600 font-semibold text-center">
            Project created successfully!
          </div>
        )}
      </div>
    </div>
  );
}
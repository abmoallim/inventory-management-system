'use client';
import { useState } from 'react';

export default function MassActionModal({ isVisible, onClose, onSubmit, action }) {
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(quantity);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">{action === 'add' ? 'Mass Add' : 'Mass Used'}</h2>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            className="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-900"
            required
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
            {action === 'add' ? 'Add to All' : 'Remove from All'}
          </button>
        </form>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';

export default function AddItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(), // Generate a unique ID based on the current timestamp
      name,
      quantity: parseInt(quantity, 10),
      description,
    };

    onAdd(newItem);
    setName('');
    setQuantity('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-900"
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-900"
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded text-gray-900"
        />
      </div>
      <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded">
        Add Item
      </button>
    </form>
  );
}

'use client';
import { useState } from 'react';

const generatePieceStyles = () => {
  const pieces = [];
  const count = 5; // Number of pieces

  for (let i = 0; i < count; i++) {
    pieces.push({
      '--translate-x': `${Math.random() * 100 - 50}px`,
      '--translate-y': `${Math.random() * 100 - 50}px`,
      '--rotate': `${Math.random() * 360}deg`,
    });
  }

  return pieces;
};

export default function InventoryItem({ item, onDelete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [pieces, setPieces] = useState([]);

  const handleDeleteClick = () => {
    setPieces(generatePieceStyles());
    setIsVisible(false);
    setTimeout(() => {
      onDelete(item.id);
    }, 500); // Duration should match the CSS animation duration
  };

  return (
    <div className={`p-4 border rounded shadow flex justify-between items-center item-container ${isVisible ? '' : 'hidden'}`}>
      <div className="item-content">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>{item.description}</p>
      </div>
      <button
        onClick={handleDeleteClick}
        className="bg-red-500 text-white p-2 rounded"
      >
        Delete
      </button>
      {!isVisible &&
        pieces.map((style, index) => (
          <div key={index} className="item-piece" style={style}>
            <div className="p-4 border rounded shadow flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

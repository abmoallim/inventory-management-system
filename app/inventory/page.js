'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import InventoryItem from '../components/InventoryItem';
import AddItemForm from '../components/AddItemForm';
import Modal from '../components/Modal';

const getItemsFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const storedItems = localStorage.getItem('inventory');
    return storedItems ? JSON.parse(storedItems) : [];
  }
  return [];
};

const saveItemsToLocalStorage = (items) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('inventory', JSON.stringify(items));
  }
};

export default function Inventory() {
  const [items, setItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const storedItems = getItemsFromLocalStorage();
    setItems(storedItems);
  }, []);

  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
    setIsModalVisible(false);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  };

  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl">Inventory</h1>
        <button
          onClick={() => setIsModalVisible(true)}
          className="mt-4 bg-green-500 text-white p-2 rounded"
        >
          Add Item
        </button>
        <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
          <AddItemForm onAdd={handleAddItem} />
        </Modal>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {items.map((item) => (
            <InventoryItem key={item.id} item={item} onDelete={handleDeleteItem} />
          ))}
        </div>
      </main>
    </div>
  );
}


'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import InventoryItem from '../components/InventoryItem';
import AddItemForm from '../components/AddItemForm';
import Modal from '../components/Modal';
import MassActionModal from '../components/MassActionModal';

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
  const [isMassAddModalVisible, setIsMassAddModalVisible] = useState(false);
  const [isMassUsedModalVisible, setIsMassUsedModalVisible] = useState(false);

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

  const handleAddQuantity = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  };

  const handleUsedQuantity = (id) => {
    const updatedItems = items.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  };

  const handleMassAdd = (quantity) => {
    const updatedItems = items.map(item => ({
      ...item,
      quantity: item.quantity + quantity,
    }));
    setItems(updatedItems);
    saveItemsToLocalStorage(updatedItems);
  };

  const handleMassUsed = (quantity) => {
    const updatedItems = items.map(item => ({
      ...item,
      quantity: item.quantity - quantity < 0 ? 0 : item.quantity - quantity,
    }));
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
        <button
          onClick={() => setIsMassAddModalVisible(true)}
          className="mt-4 bg-blue-500 text-white p-2 rounded ml-4"
        >
          Mass Add
        </button>
        <button
          onClick={() => setIsMassUsedModalVisible(true)}
          className="mt-4 bg-orange-500 text-white p-2 rounded ml-4"
        >
          Mass Used
        </button>
        <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
          <AddItemForm onAdd={handleAddItem} />
        </Modal>
        <MassActionModal
          isVisible={isMassAddModalVisible}
          onClose={() => setIsMassAddModalVisible(false)}
          onSubmit={handleMassAdd}
          action="add"
        />
        <MassActionModal
          isVisible={isMassUsedModalVisible}
          onClose={() => setIsMassUsedModalVisible(false)}
          onSubmit={handleMassUsed}
          action="used"
        />
        <div className="grid grid-cols-1 gap-4 mt-4">
          {items.map((item) => (
            <InventoryItem
              key={item.id}
              item={item}
              onAddQuantity={handleAddQuantity}
              onUsedQuantity={handleUsedQuantity}
              onDelete={handleDeleteItem}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

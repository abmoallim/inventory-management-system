export default function Modal({ isVisible, onClose, children }) {
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
              &times;
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }
  
import { useState } from 'react';

export default function MessageModal({ hostName, onSend, onClose }) {
  const [message, setMessage] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-bold mb-2">Message {hostName}</h2>
        <textarea
          rows="5"
          className="w-full border p-2 rounded mb-4"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-gray-500">Cancel</button>
          <button
            onClick={() => onSend(message)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
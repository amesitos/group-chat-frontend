"use client";

import { useState } from "react";

interface Props {
  onSubmit: (username: string) => void;
}

export default function UserModal({ onSubmit }: Props) {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    if (username.trim()) {
      onSubmit(username);
    } else {
      alert("Por favor, ingresa un nombre válido");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-96 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Ingresa tu nombre</h2>
        <input
          type="text"
          placeholder="Escribe tu nombre..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 w-full p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
        >
          Unirse al Chat
        </button>
      </div>
    </div>
  );
}

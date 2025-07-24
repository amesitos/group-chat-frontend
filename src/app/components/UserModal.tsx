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
      alert("Por favor, ingresa un nombre");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-80 animate-fadeIn">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          Ingresa tu nombre
        </h2>
        <input
          type="text"
          placeholder="Escribe tu nombre..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Unirse al Chat
        </button>
      </div>
    </div>
  );
}

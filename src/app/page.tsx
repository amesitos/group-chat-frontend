"use client";

import { useState } from "react";
import UserModal from "./components/UserModal";

export default function HomePage() {
  const [username, setUsername] = useState("");

  const handleSetUsername = (name: string) => {
    setUsername(name);
    console.log("Usuario ingresó:", name);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
      {/* Mostrar modal si no hay username */}
      {!username && <UserModal onSubmit={handleSetUsername} />}

      {/* Contenido después de ingresar nombre */}
      {username && (
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Bienvenido, <span className="text-blue-600">{username}</span> 👋
          </h1>
          <p className="text-lg mb-6">
            Estás listo para unirte al chat grupal en tiempo real.
          </p>
          <a
            href="/chat"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
          >
            Ir al Chat
          </a>
        </div>
      )}
    </main>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserModal from "./components/UserModal";

export default function HomePage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      setShowModal(true);
    } else {
      router.push("/chat");
    }
  }, []);

  const handleUsernameSubmit = (username: string) => {
    localStorage.setItem("username", username);
    setShowModal(false);
    router.push("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Chat en Tiempo Real</h1>
      <p className="text-lg text-gray-700 mb-6">Conéctate y chatea con todos</p>
      {showModal && <UserModal onSubmit={handleUsernameSubmit} />}
    </div>
  );
}

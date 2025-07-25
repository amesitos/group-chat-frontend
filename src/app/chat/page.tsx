"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatSidebar from "../components/ChatSideBar";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";

const socket = io("http://localhost:8000", {
  transports: ["websocket"],
  path: "/ws/socket.io",
});

interface Message {
  username: string;
  message: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<string[]>([]);
  const username = typeof window !== "undefined" ? localStorage.getItem("username") || "" : "";

  useEffect(() => {
    if (username) {
      socket.emit("join", { username });
    }

    socket.on("new_message", (data: Message) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("update_users", (connectedUsers: string[]) => {
      setUsers(connectedUsers);
    });

    return () => {
      socket.off("new_message");
      socket.off("update_users");
    };
  }, [username]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", { message });
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar users={users} />
      <div className="flex-1 flex flex-col bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Chat Global</h2>
        <ChatMessages messages={messages} currentUser={username} />
        <ChatInput message={message} setMessage={setMessage} onSend={sendMessage} />
      </div>
    </div>
  );
}

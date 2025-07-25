interface ChatSidebarProps {
  users: string[];
}

export default function ChatSidebar({ users }: ChatSidebarProps) {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Usuarios conectados</h2>
      <ul>
        {users.map((user, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 mb-3 p-2 bg-gray-100 rounded-lg"
          >
            <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
              {user[0].toUpperCase()}
            </div>
            <span>{user}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

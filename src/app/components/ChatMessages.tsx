interface Message {
  username: string;
  message: string;
}

interface ChatMessagesProps {
  messages: Message[];
  currentUser: string;
}

export default function ChatMessages({ messages, currentUser }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto mb-4 p-4 bg-white rounded-lg shadow-inner">
      {messages.length === 0 ? (
        <p className="text-gray-500 text-center">Aún no hay mensajes...</p>
      ) : (
        messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-3 rounded-lg max-w-xs ${
              msg.username === currentUser ? "bg-blue-100 ml-auto" : "bg-gray-200"
            }`}
          >
            <p className="text-sm text-gray-500 font-semibold">{msg.username}</p>
            <p>{msg.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

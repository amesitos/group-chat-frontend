interface ChatInputProps {
  message: string;
  setMessage: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({ message, setMessage, onSend }: ChatInputProps) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Escribe un mensaje..."
      />
      <button
        onClick={onSend}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </div>
  );
}

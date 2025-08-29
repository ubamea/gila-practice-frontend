import { useGetCategories } from "@/api/notifications/use-get-categories";
import { useSendMessage } from "@/api/notifications/use-send-message";
import { useState } from "react";

const MessagePage = () => {
  const { data: options, isLoading, error } = useGetCategories();
  const sendMessageMutation = useSendMessage();

  const [selectedOption, setSelectedOption] = useState<number | "">("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!selectedOption || !message) {
      alert("Selecciona una opción y escribe un mensaje");
      return;
    }

    sendMessageMutation.mutate(
      { categoryId: selectedOption as number, message },
      {
        onSuccess: () => {
          alert("Mensaje enviado correctamente");
          setMessage("");
          setSelectedOption("");
        },
        onError: () => {
          alert("Error al enviar el mensaje");
        },
      }
    );
  };

  if (isLoading) return <p>Cargando opciones...</p>;
  if (error) return <p>Error al cargar opciones: {error.message}</p>;

  return (
    <div className="p-6 max-w-lg mx-auto space-y-4">
      <h1 className="text-xl font-semibold">Enviar Mensaje</h1>

      <div>
        <label className="block mb-1">Selecciona una opción:</label>
        <select
          className="border px-3 py-2 rounded w-full"
          value={selectedOption}
          onChange={(e) => setSelectedOption(Number(e.target.value))}
        >
          <option value="">-- Selecciona --</option>
          {options?.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">Mensaje:</label>
        <textarea
          className="border px-3 py-2 rounded w-full"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={sendMessageMutation.isPending}
      >
        {sendMessageMutation.isPending ? "Enviando..." : "Enviar"}
      </button>
    </div>
  );
};

export default MessagePage;

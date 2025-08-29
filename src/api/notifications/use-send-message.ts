// src/hooks/use-send-message.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface MessagePayload {
  categoryId: number;
  message: string;
}

const sendMessage = async (payload: MessagePayload) => {
  const BASE_BACK_URL = import.meta.env.VITE_BASE_BACK_URL;
  const url = `${BASE_BACK_URL}/messages/send`;
  const response = await axios.post(url, payload);
  return response.data;
};

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["logs"] });
    },
  });
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Logs {
  channel: string;
  id: number;
  messageContent: string;
  sentAt: string;
  status: string;
  userName: string;
}

const fetchLogs = async (): Promise<Logs[]> => {
  const BASE_BACK_URL = import.meta.env.VITE_BASE_BACK_URL;
  console.log(BASE_BACK_URL);
  const url = `${BASE_BACK_URL}/logs`;
  console.log("URL de logs:", url);
  const response = await axios.get(url);
  return response.data;
};

export const useGetLogs = () => {
  return useQuery<Logs[], Error>({
    queryKey: ["logs"],
    queryFn: fetchLogs,
  });
};

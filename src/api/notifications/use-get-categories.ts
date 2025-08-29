import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Category {
  id: number;
  name: string;
}

const fetchCategories = async (): Promise<Category[]> => {
  const BASE_BACK_URL = import.meta.env.VITE_BASE_BACK_URL;
  console.log(BASE_BACK_URL);
  const url = `${BASE_BACK_URL}/categories`;
  console.log("URL de logs:", url);
  const response = await axios.get(url);
  return response.data;
};

export const useGetCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

import { useEffect } from "react";
import { API } from "../api/api";
import useSWR from "swr";

const fetcher = async () => {
  const { data } = await API.get("asd");

  return data;
};

export const useTest = () => {
  const { data, error, mutate } = useSWR("test", fetcher);

  useEffect(() => {
    if (!data && !error) {
      mutate();
    }
  }, [data, error, mutate]);

  return { data };
};

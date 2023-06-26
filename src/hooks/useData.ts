import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint : string) => {
  
let [data, setData] = useState<T[]>([]);
let [error, setError] = useState("");
let [isLoading, setLoading] = useState(false);

useEffect(() => {
    let controller = new AbortController();

    setLoading(true);
  apiClient
    .get<FetchResponse<T>>(endpoint, {signal : controller.signal})
    .then((res) => {
      setData(res.data.results);
      setLoading(false);
    })
    .catch((err) => {
        if(err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    });
} , []);


    return { data , error, isLoading};
}

export default useData;
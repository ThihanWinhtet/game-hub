import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id : number;
    name : string
}

interface FetchGenere {
    count: number;
    results: Genre[];
}

const useGenere = () => {
  
let [genres, setGenere] = useState<Genre[]>([]);
let [error, setError] = useState("");
let [isLoading, setLoading] = useState(false);

useEffect(() => {
    let controller = new AbortController();

    setLoading(true);
  apiClient
    .get<FetchGenere>("/genres", {signal : controller.signal})
    .then((res) => {
      setGenere(res.data.results);
      setLoading(false);
    })
    .catch((err) => {
        if(err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false);
    });
} , []);


    return { genres , error, isLoading};
}

export default useGenere;
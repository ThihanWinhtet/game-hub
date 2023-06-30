
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { genere } from "../data/genere";

export interface Genre{
    id : number;
    name : string;
    image_background : string
}


const useGenere = () => useQuery({
    queryKey : ['genres'],
    queryFn : () => apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then(res=> res.data),
    staleTime : 24 * 60 * 60 * 1000,
    initialData : {count : genere.length , results : genere}
})

export default useGenere;
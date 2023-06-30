
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { genere } from "../data/genere";

const apiClient = new APIClient<Genre>('/genres');


export interface Genre{
    id : number;
    name : string;
    image_background : string
}


const useGenere = () => useQuery({
    queryKey : ['genres'],
    queryFn : apiClient.getAll,
    staleTime : 24 * 60 * 60 * 1000,
    initialData : {count : genere.length , results : genere, next: null}
})

export default useGenere;
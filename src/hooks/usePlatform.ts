import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

interface Platform{
    id : number;
    name : string;
    slug : string
}

const usePlatform = () => useQuery({
    queryKey : ['platforms'],
    queryFn : () => apiClient.get<FetchResponse<Platform>>('/platforms').then(res=> res.data),
    staleTime : 24 * 60 * 60 * 1000,
    initialData : { count : platforms.length, results : platforms }
});


export default usePlatform;
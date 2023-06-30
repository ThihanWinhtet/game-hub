import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

let axiosInstance = axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'dfc8ff45777a41499883de7526161320'
    }
})

class APIClient<T>{
    endpoint : string;

    constructor(endpoint : string){
        this.endpoint = endpoint;
    }

    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res=> res.data);
    }
}

export default APIClient;
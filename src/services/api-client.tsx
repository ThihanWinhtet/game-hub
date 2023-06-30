import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'dfc8ff45777a41499883de7526161320'
    }
})
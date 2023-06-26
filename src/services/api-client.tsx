import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : 'dfc8ff45777a41499883de7526161320'
    }
})
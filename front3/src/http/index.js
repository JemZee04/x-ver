import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080'
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export {
    $host,
}
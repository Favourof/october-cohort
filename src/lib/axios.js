import axios from "axios"

const baseUrl ="http://localhost:4000"

export const publicInstance = axios.create({
    baseURL:baseUrl
})
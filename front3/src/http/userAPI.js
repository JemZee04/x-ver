import {$host} from "./index.js";

export const registration = async (email,password) => {
    const response = await $host.post('v1/users/registration', {email,password,role:'ADMIN'})
    return response
}

export const login = async (email,password) => {
    const response = await $host.get(`v1/users/login?email=${email}&password=${password}`)
    return response
}

export const getUsers = async () => {
    const response = await $host.get('v1/users')
    return response.data
}

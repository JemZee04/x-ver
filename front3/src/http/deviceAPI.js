import {$host} from "./index.js";

export const createOrder = async (email,password) => {
    const {data} = await $host.post('api/order', {})
    return data
}

export const fetchOrders = async () => {
    const {data} = await $host.get('api/order',)
    return data
}

export  const fetchOneOrder = async (id) => {
    const {data} = await $host.post('api/order/' + id,)
    return data
}


import axios from 'axios'

const baseUrl = 'https://wallet.goit.ua'

export const instance = axios.create({
    baseURL: baseUrl,
})
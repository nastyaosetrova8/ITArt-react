import { instance } from "./api"

export const token = {
    set(token){
        instance.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){
        instance.defaults.headers.common.Authorization = '';
    }
}

export const registerRequest = async (registerUserData)=>{
    const {data} = await instance.post('/api/auth/sign-up', registerUserData)
    token.set(data.token)   
    return data
}

export const logInRequest = async (logInUserData)=>{
    const {data} = await instance.post('/api/auth/sign-in', logInUserData)
    token.set(data.token)
    return data
}

export const logOutRequest = async () =>{
    await instance.delete('/api/auth/sign-out')
    token.unset()
}

export const currentUserRequest = async () =>{
    const {data} = await instance.get('/api/users/current')
    return data
}
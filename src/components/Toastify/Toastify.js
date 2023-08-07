import { toast } from "react-toastify"

export const notifyRegisterSuccess = ()=> toast.success('You are successfully registered!')
export const notifyRegisterError = ()=> toast.error('Please enter equal passwords')
export const notifyRegisterApiError = (error)=>toast.error(`Ooops.. ${error}`)
export const notifyTest = () => toast.warning('TEST!!!')
import { toast } from "react-toastify"

export const notifyRegisterSuccess = (name)=> toast.success(`Wellcome, ${name}`)
export const notifyRegisterError = ()=> toast.error('Please enter equal passwords')
export const notifyRegisterApiError = (error)=>toast.error(`Ooops.. ${error}` )
export const notifyTest = () => toast.warning('TEST!!!')
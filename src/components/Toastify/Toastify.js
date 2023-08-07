import { toast } from "react-toastify"

export const notifyRegisterSuccess = ()=> toast.success('You are registered!')
export const notifyRegisterError = ()=> toast.error('Please enter equal passwords')
export const modalSuccess = () =>toast.success('ok')
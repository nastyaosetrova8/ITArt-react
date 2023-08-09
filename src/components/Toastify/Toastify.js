import { toast } from "react-toastify"

export const notifyRegisterSuccess = (name) => toast.success(`Wellcome, ${name}`)
export const notifyRegisterError = () => toast.error('Please enter equal passwords')
export const notifyRegisterApiError = (error) => toast.error(`Ooops.. ${error}`)
export const notifyEmptySummary = () => toast.warning('There is no data for this period')
export const notifyAmountInvalid = () => toast.error('The sum must be positive')
export const notifyAmountMissing = () => toast.error('Please enter an amount')
export const notifyCommentLength = () => toast.warning('Must be 20 characters or less')
export const notifyDataEdded = () => toast.success('Data edded successfully')


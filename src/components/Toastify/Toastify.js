import { toast } from "react-toastify"

export const notifyRegisterSuccess = (name) => toast.success(`Wellcome, ${name}`)
export const notifyRegisterError = () => toast.error('Please enter equal passwords')
export const notifyRegisterApiError = (error) => toast.error(`Ooops.. ${error}`)
export const notifyEmptySummary = () => toast.warning('There is no data for this period')
export const notifyDataEdded = () => toast.success('Data edded successfully')
export const notifyIncomeEdded = () => toast.success('Income data edded successfully')
export const notifyExpenseEdded = () => toast.success('Expense data edded successfully')
export const notifyDeleted = () => toast.warning('Transaction deleted')
export const notifyEdited = () => toast.info('Transaction edited successfully')


import * as ToastPrimitive from '@radix-ui/react-toast'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastHeader,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { Heading } from '../Heading'
import { v4 as uuidv4 } from 'uuid'

export interface ToastProps extends ToastPrimitive.ToastProps {
  id?: string
  title: string
  description?: string
  dismiss?: () => void
  isOpen?: boolean
}

interface ToastProviderProps {
  children: ReactNode
}

interface ToastContextData {
  addToast(toast: ToastProps): void
  removeToast(id: string): void
}

export function Toast({
  title,
  description,
  id,
  dismiss,
  isOpen,
  ...props
}: ToastProps) {
  const [open, setOpen] = useState(isOpen)

  return (
    <ToastContainer id={id} open={open} onOpenChange={setOpen} {...props}>
      <ToastHeader>
        <ToastPrimitive.Title asChild>
          <Heading size="sm">{title}</Heading>
        </ToastPrimitive.Title>
        <ToastClose onClick={dismiss ? () => dismiss : () => setOpen(false)}>
          <X weight="bold" size={20} />
        </ToastClose>
      </ToastHeader>
      {description && (
        <ToastPrimitive.Description asChild>
          <ToastDescription size="sm">{description}</ToastDescription>
        </ToastPrimitive.Description>
      )}
    </ToastContainer>
  )
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
)

export function ToastProvider({ children }: ToastProviderProps) {
  const [toastList, setToastList] = useState<ToastProps[]>([])

  const addToast = useCallback(
    ({ title, description }: Omit<ToastProps, 'id'>) => {
      const id = uuidv4()
      const toast = {
        id,
        title,
        description,
      }

      setToastList((prevState) => [...prevState, toast])
    },
    [],
  )

  const removeToast = useCallback(
    (id: string) => {
      setToastList(toastList.filter((toast) => toast.id !== id))
    },
    [toastList],
  )

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastPrimitive.Provider swipeDirection="right">
        <ToastViewport />
        {toastList?.map((toast) => (
          <Toast
            key={toast.id}
            dismiss={() => removeToast(toast.id as string)}
            {...toast}
          />
        ))}

        {children}
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast mus be sed within a ToastProvider')
  }

  return context
}

Toast.displayName = 'Toast'

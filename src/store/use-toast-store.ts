import { create } from 'zustand'

interface ToastState {
  leadingIcon?: React.ReactNode,
  title: string
  description?: string
  action?: React.ReactNode
  mount: boolean
  hide: boolean
  notifyToast: (props: {
    leadingIcon?: React.ReactNode,
    title: string,
    description?: string,
    action?: React.ReactNode,
  }) => void
  unmountToast: () => void
  setHideToast: (hide: boolean) => void
}

export const useToastStore = create<ToastState>()(set => ({
  title: '',
  description: '',
  mount: false,
  hide: false,
  notifyToast: ({
    leadingIcon,
    title,
    description,
    action,
  }) => set(state => ({
    leadingIcon,
    title,
    description,
    action,
    mount: true,
  })),
  unmountToast: () => set(state => ({
    mount: false,
  })),
  setHideToast: (hide) => set(state => ({
    hide,
  })),
}))

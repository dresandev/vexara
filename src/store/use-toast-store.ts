import { create } from 'zustand'

interface Content {
  leadingIcon?: React.ReactNode,
  title: string
  description?: string
  action?: React.ReactNode
}

interface ToastState {
  content: Content
  mount: boolean
  hide: boolean
  notifyToast: (content: Content) => void
  unmountToast: () => void
  setHideToast: (hide: boolean) => void
}

export const useToastStore = create<ToastState>()(set => ({
  content: {
    title: '',
    description: '',
    leadingIcon: null,
    action: null,
  },
  mount: false,
  hide: false,
  notifyToast: (content) => set(state => ({
    content,
    mount: true,
  })),
  unmountToast: () => set(state => ({
    mount: false,
  })),
  setHideToast: (hide) => set(state => ({
    hide,
  })),
}))

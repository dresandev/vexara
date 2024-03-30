import { create } from 'zustand'

interface UiState {
  showBackdrop: boolean
  setShowBackdrop: (show: boolean) => void
}

export const useUiStore = create<UiState>()(set => ({
  showBackdrop: false,
  setShowBackdrop: (showBackdrop) => set(state => ({
    showBackdrop,
  }))
}))

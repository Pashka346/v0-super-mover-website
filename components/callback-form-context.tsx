"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface CallbackFormContextType {
  isOpen: boolean
  openForm: () => void
  closeForm: () => void
}

const CallbackFormContext = createContext<CallbackFormContextType | undefined>(undefined)

export function CallbackFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openForm = () => setIsOpen(true)
  const closeForm = () => setIsOpen(false)

  return <CallbackFormContext.Provider value={{ isOpen, openForm, closeForm }}>{children}</CallbackFormContext.Provider>
}

export function useCallbackForm() {
  const context = useContext(CallbackFormContext)
  if (context === undefined) {
    throw new Error("useCallbackForm must be used within a CallbackFormProvider")
  }
  return context
}

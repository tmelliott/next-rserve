import { createContext, useContext } from "react"

const RserveContext = createContext()

export const RserveProvider = ({ value, children }) => {
  return (
    <RserveContext.Provider value={value}>{children}</RserveContext.Provider>
  )
}

export function useRserveContext() {
  return useContext(RserveContext)
}

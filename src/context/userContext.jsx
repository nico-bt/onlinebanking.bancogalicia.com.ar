import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [dni, setDni] = useState("")
  const [password, setPassword] = useState("")

  return (
    <UserContext.Provider value={{ dni, setDni, password, setPassword }}>
      {children}
    </UserContext.Provider>
  )
}

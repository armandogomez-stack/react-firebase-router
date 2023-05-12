import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Navigate } from "react-router-dom"

export const  RequireAuth = ({children}) =>{
  const {user, setUser} =  useContext(UserContext)
  
  if(!user){
    return <Navigate to="/login"/>
  }
  return (
   children
  )
}


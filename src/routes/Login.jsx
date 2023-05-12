import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
export const Login = () => {

  const  { user , setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const handleClickLogin = () =>{
      setUser(true)
      navigate('/home')
  }
  return (
   <>
    <h1>Login</h1>
    <h2>{
          user ? 'Online' : 'desactivado'
        }
    </h2>
    <button onClick={handleClickLogin}>acceder</button>
   </>
  )
}


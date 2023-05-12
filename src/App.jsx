import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from "./routes/Login"
import { Home } from "./routes/Home"
import { NavBar } from './components/NavBar'
import { RequireAuth } from './components/RequireAuth'
function App() {

  return (
    <>
      <h1>App</h1>
      <NavBar></NavBar>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={
          <RequireAuth>
            <Home/>
          </RequireAuth>
         }/>
      </Routes>
    </>
  )
}

export default App

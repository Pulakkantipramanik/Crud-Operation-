import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homecrud from './Components/Homecrud'
import CreateUser from './Components/CreateUser'
import Users from './Components/Users'
import Editusers from './Components/Editusers'



 const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Homecrud/>
        <Routes>
            <Route path='/createusers' element={<CreateUser/>}></Route>
            <Route path='/users' element={<Users/>}></Route>
            <Route path="/edit/:index" element={<Editusers/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App


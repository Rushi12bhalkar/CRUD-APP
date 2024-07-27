import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './Screens/Register'
import Login from './Screens/Login'
import Home from './Screens/Home'
import AddStudent from './Component/AddStudent'
import UpdateStudent from './Component/UpdateStudent'


function App() {
  return (
    <BrowserRouter>

    <Routes>
     
     <Route exact path = "/" element={<Register></Register>}></Route>
     <Route exact path = "/login" element={<Login></Login>}></Route>
     <Route exact path = "/home" element={<Home></Home>}></Route>
     <Route exact path = "/add" element={<AddStudent></AddStudent>}></Route>
     <Route path="/edit/:id" element={<UpdateStudent></UpdateStudent>}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
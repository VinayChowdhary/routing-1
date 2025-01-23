import React, { Component } from 'react'
import {Route, Routes} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Contact from "./Components/Contact"
import Nopage from "./Components/Nopage"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import "./index.css"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* <switch></switch> */}
      <Nav/>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path= "/" Component={Home}/>
          <Route path= "/home" exact Component={Home}/>
          <Route path= "/login" exact Component={Login}/>
          <Route path= "/register" exact Component={Register}/>
          <Route path= "/contact" exact Component={Contact}/>
          <Route path= "*" Component={Nopage}/>
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
    )
  }
}

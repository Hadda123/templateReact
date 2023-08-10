
import './App.css';
import Index from './Components/index'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import About from './Components/About';
import React, { Component } from 'react';
import Menu from './Components/Menu';
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path='/' component={Index}/>
      <Route  path='/contact' component={Contact}/>
      <Route  path='/about' component={About}/>
      <Route  path='/menu' component={Menu}/>
    </BrowserRouter>
  );

}}
export default App;


import Home from './../Home'
import About from './../About'
import Footer from './../Footer'
import Contact from './../Contact'
import Menu from './../Menu'
import React, { Component } from 'react';

class Index extends Component {
  render(){
  return (
    <div>
      <Home/>
      <About/>
      <Menu/>
      <Contact/>
      <Footer/>

    </div>
  );

}}
export default Index;

import React from 'react'
import { Link } from 'react-router-dom'

const About = () =>{
  return (
    <div>
      <section class="about" id="about">

      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
<h1 class="heading"> <span>about</span> us </h1>

<div class="row">

    <div class="image">
        <img src="images/about-img.jpeg" alt=""/>
    </div>

    <div class="content">
        <h3>what makes our coffee special?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
        <Link to="/menu" class="btn">learn more</Link>
    </div>

</div>

</section>
    </div>
  )
}

export default About
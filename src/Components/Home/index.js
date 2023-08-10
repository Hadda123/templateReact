import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>{
  return (
    <div>
      <section class="home" id="home">

      <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
<div class="content">
    <h3>fresh coffee in the morning</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
    <Link to="/about" class="btn">get yours now</Link>
</div>

</section>
    </div>
  )
}

export default Home
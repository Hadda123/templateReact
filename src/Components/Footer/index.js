import React from 'react'
import { Link } from 'react-router-dom'
const Footer=()=>{
  return (
    <div>
      
<section className="footer">

<div className="share">
    <a href="https://www.facebook.com/profile.php?id=100092179449015" target="_blank" className="fab fa-facebook-f"></a>
    <a href="https://www.facebook.com/profile.php?id=100092179449015" target="_blank"className="fab fa-twitter"></a>
    <a href="https://www.facebook.com/profile.php?id=100092179449015" target="_blank" className="fab fa-instagram"></a>
    <a href="https://www.facebook.com/profile.php?id=100092179449015" target="_blank" className="fab fa-linkedin"></a>
    <a href="https://www.facebook.com/profile.php?id=100092179449015" target="_blank" className="fab fa-pinterest"></a>
</div>

<div className="links">
    <Link to ='/'>home</Link>
    <Link to='/about'>about</Link>
    <Link to='/menu'>menu</Link>
    <Link to='/contact'>contact</Link>
</div>

<div className="credit">created by <span>mr. web designer</span> | all rights reserved</div>

</section>
       </div>
  )
}

export default Footer
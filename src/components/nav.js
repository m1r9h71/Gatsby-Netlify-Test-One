import React from 'react'
import './nav.css'

const Nav = () => (

    <div class="navbar">
    <a class="active" href="/"><i class="fa fa-fw fa-home"></i>Home</a>
    <a href="/about"><i class="fa fa-fw fa-about"></i>About</a>
    <a href="/pictures"><i class="fa fa-fw fa-pictures"></i>Pictures</a>
    <a href="/email"><i class="fa fa-fw fa-email"></i>Email</a>

    </div>
)

export default Nav
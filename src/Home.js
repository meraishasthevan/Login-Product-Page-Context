import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

function Home (){
    return(
          <div className='home-backimg'>
            <div className='home-container'>
            <h1 className='col-4'>Furniture</h1>
            <nav className='perfume-flex col-8 home-top'>
              
              <Link className='link-home' to='/home'>Home</Link>
              <Link className='link-home' to='/about'>About</Link>
              <Link className='link-home' to='/dashboard'>Dashboard</Link>
              <Link className='link-home' to='/product'>Product</Link>
            </nav>
            </div>
            <div className='home-head'>
            <h1>Welcome To Our Website</h1>
            <h2>Bring Nature Into Your Home</h2>
            <button className='home-btn'>Get Started</button>
           
            </div>
            </div>
      );
}    
export default Home;
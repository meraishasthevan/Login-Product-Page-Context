import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';

function About (){
    return(
        <div className='abt-backimg'>
          <div className='perfume-flex home-container'>
              <h1 className='col-4'>About</h1>
             <nav className='perfume-flex col-8 about-top'>
                 <Link className='link-abt' to='/home'>Home</Link>
                 <Link className='link-abt' to='/about'>About</Link>
                 <Link className='link-abt' to='/dashboard'>Dashboard</Link>
                 <Link className='link-abt' to='/product'>Product</Link>
                
            </nav>
            </div>
            <div className='abttext-center'>
               <h1>“Design creates culture. Culture shapes values. Values determine the future“</h1>
               <h2>“Everything I build is going to last a lifetime– generations. And it’s always going to hold its’ value, too.”</h2>
               <h3>“Design is not just what it looks like and feels like. Design is how it works”</h3>
               <h4>“Everything is designed. Few things are designed well.”</h4>
               <h5>“Simplicity carried to an extreme becomes elegance.”</h5>
               <h6>"Every great design begins with an even better story.” </h6>
          </div>
          <div className='abt-img1'>
            <h1 className='abt-head'>For Sitting</h1>
            <img src="images/img-3.png" alt="wait"/>
             <p>Seating is amongst the oldest known furniture types, and authors including Encyclopædia Britannica regard it as the most important. 
              In addition to the functional design, seating has had an important decorative element from ancient times to the present day. This includes carved and sculpted pieces intended as works of art, as well as the styling of seats to indicate social importance,
               with senior figures or leaders granted the use of specially designed seats.</p>


          </div>
        </div>
    );
}
export default About;
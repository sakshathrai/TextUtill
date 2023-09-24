import React from 'react';
import PropTypes from 'prop-types';

function About(props) {
  return (
    <div>
      <hr style={props.mode === 'dark' ? { borderColor: 'rgb(255, 255, 255)' } : { borderColor: 'rgb(0, 0, 0)' }} />
      <marquee>My Biography</marquee>
      <hr style={props.mode === 'dark' ? { borderColor: 'rgb(255, 255, 255)' } : { borderColor: 'rgb(0, 0, 0)' }} />
      <h1 style={{ textAlign: 'center' }}><b>SAKSHATH RAI K</b></h1>
      <h2 style={{ textAlign: 'center' }}>COMPUTER SCIENCE</h2>
      <h3 style={{ textAlign: 'center' }}>4CB21CS095</h3>
      <h4 style={{ textAlign: 'center' }}>PH: 8431006843</h4>
      <h5 style={{ textAlign: 'center' }}>Email: sakshathrai2004@gmail.com</h5>
      <h6 style={{ textAlign: 'center' }}>Canara Engineering College</h6>

      <p><b>Hello, everyone!</b><br/>
        I'm pursuing my <strong>2nd year Engineering Degree</strong> in <em>Computer Science and Engineering</em> at <mark>Canara Engineering College</mark>. <u>I am always ready to have</u> <del>new</del> experiences, meet new people, and learn new things.<br/></p>
      <blockquote >I find the idea of creating value for people and impacting the world through my work gratifying</blockquote>
      <p style={{ textAlign: 'center' }}>Just keep on trying on <sup>infinite</sup> <sub>time</sub></p>
      <code > 
        My Hobbies are
        Coding
        Swimming
      </code> 
      
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default About;

import React, { Component } from 'react';
import "./About.css";
import profilePic from '../assets/profilePIC.JPG';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
            <div className="split left">
            <div className="centered">
            <img 
            className="profile_image"
            src={profilePic}
            alt="Profile Pic"
            ></img>
            </div>
            </div>
            <div className="split right">
            <div className="centered">
            <div className="name_title">Your Name
            <h1>Kenneth Fadojutimi</h1>
            </div>
            <div className="brief_description">
            // Details about you goes here
            <p>I am a Rising Junior at the University of Maryland
              <br></br>
              I play basketball and enjoy reading manga. I am also a Software Engineer Intern at Rebel in new york.
            </p>
            </div>
            </div>
            </div>
            </div>

      </div>
    )
  }
}
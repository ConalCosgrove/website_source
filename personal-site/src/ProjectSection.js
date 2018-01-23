import React, { Component } from 'react';
import './App.css';
import ProjectComp from "./ProjectComp.js";
class ProjectSection extends Component {
  render() {

    return (

      <div className="Project-Section">
      	<h2>The most recent projects I've been working on:</h2>
      	<ProjectComp 	title = "Live DART" 
      					description = "An app that displays realtime data on a specified train station served by Iarnrod Eireann. Very handy for quickly checking when the next train you can get is."
      					link = "https://github.com/ConalCosgrove/LiveDART/"
      					image = "http://www.irishrail.ie/images-rwd/logo_irishrail.png"
      					skills = {["Java","Multithreading","API's"]}
      					/>
      	
      	<ProjectComp 	title = "Pacbots Competition"
      					description = "Working in a team from Trinity College Dublin to build and code an autonomous robot capable of playing the game Pacman, for a competition hosted by Harvard Undergraduate Robotics Society."
      					link = "https://harvardrobotics.com/pacbots" 
      					image = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pacman.svg/542px-Pacman.svg.png"
      					skills = {["Java","Multithreading","API's"]}
      					/>

      	<ProjectComp	title = "This Website"
      					description = "This website was written as an exercise to teach myself React JS and CSS."
      					link = "https://github.com/ConalCosgrove/website_source"
      					image = "https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAt_AAAAJDQxOTU0N2ExLTg4MmYtNDBlMC1iMWQzLThlNjRlMmQ2OTYzOQ.jpg"
      					skills = {["Java","Multithreading","API's"]}
      					/>

      	<ProjectComp	title = "Android App To Interact w/ Iot Device"
      					description = "Over the summer of 2017 I worked as the Android developer for a new start up, currently based in Denmark. As the product is still in development I cannot provide more information."
      					image = "https://blog.stylingandroid.com/wp-content/uploads/2014/12/android.svg"
      					skills = {["Java","Multithreading","API's"]}
      					/>


      </div>
    );
  }
}

export default ProjectSection;
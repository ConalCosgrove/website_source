import React, { Component } from 'react';
import './App.css';
import LiveDart from './images/LiveDart.png';

class ProjectComp extends Component {
  render() {
 	const sk = this.props.skills;
  	  const skillSection = sk.map((skill)=>
  		<li className="Skill-Bubble">+ {skill}</li>
  		);

    return (

      <div className="Project-Comp">
      	<div className="Project-Contents">

      		
      		<img className ="Project-Image" src = {this.props.image}/>
      	

      		<div className = "Project-Text">
		      	<h3><u>{this.props.title}</u></h3>
		      	<p>{this.props.description}</p>
		      	<h5>Skills aquired while working on this project: </h5>
		      	<ul>
		      	{skillSection}
		      </ul>
		      	<a href = {this.props.link}> <h5> more info... </h5> </a>
		    </div>
      	</div>
      </div>
    );
  }
}

export default ProjectComp;
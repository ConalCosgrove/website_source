import React, { Component } from 'react';
import './App.css';
import LiveDart from './images/LiveDart.png';

class ProjectComp extends Component {
  render() {
    return (

      <div className="Project-Comp">
      	<div className="Project-Contents">

      		
      		<img className ="Project-Image" src = {this.props.image}/>
      	

      		<div className = "Project-Text">
		      	<h3>{this.props.title}</h3>
		      	<h5>{this.props.description}</h5>
		      	<a href = {this.props.link}> <h5> more info... </h5> </a>
		    </div>
      	</div>
      </div>
    );
  }
}

export default ProjectComp;
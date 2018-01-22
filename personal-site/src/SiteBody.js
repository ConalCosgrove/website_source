import React, { Component } from 'react';
import BodyLeft from './BodyLeft.js';
import BodyRight from './BodyRight.js';
import './App.css';

class SiteBody extends Component {
  render() {
    return (

      <div className="SiteBody">
      	<BodyLeft/>
      	<BodyRight/>

      </div>
    );
  }
}

export default SiteBody;
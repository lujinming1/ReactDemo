import React, { Component } from 'react';

class Demo5 extends Component {

  
  render() {
    var styleObj = {
      color:'green',
      fontSize:'44px',
      padding:'105px'
    };
    return (
      <div>
      <p style={{color:'red'}}>Hello {this.props.name} </p>
      <p style={styleObj}>Hello {this.props.name}</p>
      <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Demo5;

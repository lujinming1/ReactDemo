import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Demo12 extends Component{
  constructor(props){
    super(props);
    this.state = {
      time : new Date()
    }
  }

  componentDidMount(){
    this.timeID = setInterval(
      ()=> this.tick(),1000
    );
  }
  tick(){
    this.setState({
      time : new Date()
    });
  }

  componentWillUnmount(){
    clearInterval(this.timeID);
  }
  render(){

    return (
      <p>{this.state.time.toLocaleTimeString()}</p>
    )
  }
}

export default Demo12;

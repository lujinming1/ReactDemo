import React , {Component} from 'react';

class Demo6 extends Component {
  constructor(props){
    super(props);
    this.state = {
      enable :false
    };
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(e){
  var enable = !this.state.enable;
  this.setState({
    enable
  });
  e.preventDefault();

}

  render(){
    var thisState = this.state.enable;
    return (
      <p>
        <input type="text" disabled={this.state.enable}/>
        <span>{thisState}</span>
        <button onClick={this.handleClick}>点我啊</button>
      </p>
    )
  }

}

export default Demo6;

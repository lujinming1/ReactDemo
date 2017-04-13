import React , {Component} from 'react';

class Demo6 extends Component {
  constructor(props){
    super(props);
    this.state = {
      enable :false
    };
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(event){

  this.setState({
    enable:!this.state.enable
  });

  event.stopPropagation();
  event.preventDefault();

}

  render(){

    return (
      <p>
        <input type="text" disabled={this.state.enable}/>
        <span>{this.state.enable}</span>
        <button onClick={this.handleClick}>点我啊</button>
      </p>
    )
  }

}

export default Demo6;

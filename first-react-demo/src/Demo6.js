import React , {Component} from 'react';

class Demo6 extends Component {
  constructor(props){
    super(props);
    this.state = {
      enable :false
    };
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(){
  this.setState({
    enable:!this.state.enbale
  });
  event.stopPropagation();
  event.preventDefault();
}

  render(){
    return (
      <p>
        <input type="text" disabled={this.state.enable}/>
        <button onClick={this.handleClick}>点我啊</button>
      </p>
    )
  }

}

export default Demo6;

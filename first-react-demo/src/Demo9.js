import React, {Component} from 'react';

class Demo9 extends Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event){
    
    this.refs.myTextIput.focus();
  }

  render(){
    return (
      <div>
        <input type="text" ref="myTextIput" />
        <input type="button" value="点我获得焦点"  onClick={this.handleClick} />
        <button onClick={this.handleClick}>点我获得焦点</button>
      </div>
    )
  }

}

export default Demo9;

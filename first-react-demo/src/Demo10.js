import React, {Component} from 'react';

class Demo10 extends Component{

  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    alert(this.state.value +'\t');
    event.preventDefault();
  }


  handleChange(event){

    this.setState({
      value: event.target.value
    })


  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Name:
        <input type='text' value={this.state.value} onChange={this.handleChange} />

      </label>
      <input type='submit' value='Submit' />

      </form>
    )
  }

}

export default Demo10;

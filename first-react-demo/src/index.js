import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Demo5 from './Demo5';
import Demo6 from './Demo6';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


ReactDOM.render(
  <p>Hello World</p>,
  document.getElementById('demo1')
);

var names = ['jack','Rose','Tom']
ReactDOM.render(
  <div>
    {
      names.map(
        function (name){
          return <p> hello {name}</p>;
        }
      )
    }
  </div>,
  document.getElementById('demo2')
);

var arry = [
  <p>hello demo3-1</p>,
  <p>hello demo3-2</p>
];
ReactDOM.render(
  <div>{arry}</div>,
  document.getElementById('demo3')
);


var Demo4Class = React.createClass({
  render:function(){
    return <p>Hello {this.props.name}</p>;
  }
}

);

ReactDOM.render(
  <Demo4Class name="Demo4" />,
  document.getElementById('demo4')
);



ReactDOM.render(
  <Demo5 name='Demo5'/>,
  document.getElementById('demo5')
);

ReactDOM.render(
  <Demo6 />,
  document.getElementById('demo6')
);

var Demo7 = React.createClass({
  getInitialState: function(){
    return {enable:false};
  },
  handleClick: function(event){
    this.setState({enable:!this.state.enable});
    event.stopPropagation();
    event.preventDefault();
  },
  render:function(){
    return(
      <p>
        <input type="text" disabled={this.state.enable}/>
        <button onClick={this.handleClick}>点我啊</button>
      </p>
    )
  }
});

ReactDOM.render(
  <Demo7 />,
  document.getElementById('demo7')
);

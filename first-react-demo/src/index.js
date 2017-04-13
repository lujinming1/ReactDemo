import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Demo5 from './Demo5';
import Demo6 from './Demo6';
import Demo8 from './Demo8';
import Demo9 from './Demo9';
import Demo10 from './Demo10';


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


var data = 123;
ReactDOM.render(
  <Demo5 name='Demo5' title={data}/>,
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

ReactDOM.render(
  <Demo8>
    <span>hello</span>
    <span>demo8</span>
  </Demo8>,
  document.getElementById('demo8')
);

ReactDOM.render(
  <Demo9 />,
  document.getElementById('demo9')
);


ReactDOM.render(
  <Demo10 />,
  document.getElementById('demo10')
);

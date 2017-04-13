import React, {Component} from 'react';

class Demo8 extends Component {
  render(){
    return(
      <ol>
        {
          React.Children.map(this.props.children,
            function(child){
              return <li>{child}</li>
            })
        }
      </ol>
    );
  }
}

export default Demo8

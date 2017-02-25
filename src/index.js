import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var Parent = React.createClass({
  getInitialState: function() {
     return {
       text: 'default'
     };
  },
  
  handleChildClick: function(){
    this.setState({
      text: Math.random() * 1000
    });
  },
  
  render: function(){
    console.log('parent render');
    
    return (
      <div className="parent">
       this is parent!
       <Child text={this.state.text} onClick={this.handleChildClick} />
      </div>
    );
  }
});


var Child = React.createClass({
  getInitialState: function() {
    return {
     text: this.props.text + '~~~'
    };
  },
  
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      text: nextProps.text + '~~~'
    });
  },
  
  handleClick: function(){
    this.setState({
      text: 'clicked'
    });
    
    this.props.onClick();
  },
  
  render: function() {
    console.log('child render');
    
    return (
     <div className="child">
       I'm child
       <p>something from parent:</p>
       <p>{this.state.text}</p>
       <button onClick={this.handleClick}>click me</button>
     </div>
    );
  }
});


ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);

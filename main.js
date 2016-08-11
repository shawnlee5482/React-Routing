var React = require('react');
var ReactDOM = require('react-dom');

var NinjaForm = React.createClass({
  render: function() {
    return (
      <div>
        <a href='#/'>The List</a>
        <a href='#/image'>The Image</a>
        <a href='#/home'>Home</a>
        <div>
          <h2>Your Location {this.props.route}</h2>
          <p>Name: <input type="text"/></p>
          <p><button>Submit</button></p>
        </div>
      </div>
    )
  }
});

var NinjaHome = React.createClass({
  render: function() {
    return (
      <div>
        <a href='#/'>The List</a>
        <a href='#/image'>The Image</a>
        <a href='#/form'>Form</a>
        <div>
          <h2>Your Location {this.props.route}</h2>
        </div>        
      </div>
    )
  }
});

var App = React.createClass({
  render: function(){
    console.log('route = ', this.props.route);
    if(this.props.route == "form") {
      return (
        <div>
          <h1>Ninja Router</h1>
          <NinjaForm route={this.props.route}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Ninja Router</h1>
          <NinjaHome route={this.props.route}/>
        </div>
      )
    }
  }
});

window.onhashchange = function() {
  console.log('hash change: ', location.hash.substr(2));
  ReactDOM.render(<App route = {location.hash.substr(2)}/>, document.getElementById('app'));
};

ReactDOM.render(<App route = {"home"}/>, document.getElementById('app'));


var React = require('react');

//Functional stateless components
//Only define the render method and contain no states
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to the about page</p>
    </div>
  );
};

module.exports = About;

import React, { Component } from 'react';
import './App.css';
import FourthComponent from './components/FourthComponent';

class App extends Component {
  render() {
    return (
      <div className = "App">
        Main App Component
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>

        {/* Fourth Component from File */}
        <FourthComponent></FourthComponent>
      </div>
    );
  }
}

//Class Component
class FirstComponent extends Component {
  render() {
    return (
      <div className = "firstComponent">
        First Component
      </div>
    );
  }
}

//Class Component
class SecondComponent extends Component {
  render() {
    return (
      <div className = "secondComponent">
        Second Component
      </div>
    );
  }
}


//function cmponent
function ThirdComponent() {
  return (
    <div className = "thirdComponent">
      Third Component
    </div>
  );
}
{/* Note: 
1. Babel converts JSX code to JS code.

2. React fragments:
 <>
  <h1></h1>
  <h1></h1>
</> 

3. React Custom components should start with Capital letters.

4. return 
    <div>...
    ...
    --> Not allowed

  return <div>..</div> --> allowed

  5. import React from 'react' if you want to use JSX in components.

  6. import {Component} --> if Component is not exported default.
  import Component --> default exported component
*/}

export default App;

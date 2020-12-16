import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
   render() {
      return (
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
             Learn React
           </a>
         </header>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div className="Content">
            <h2>Hello World</h2>
            <p>Some more details...</p>
            <Bias name="All or Nothing"/>
            <Bias name="Catastrophising"/>
            <Bias name="Imperatives"/>
            <Bias name="Labelling"/>
            <Next/>
         </div>
      );
   }
}

function Bias(props) {
    return (
      <div className="bias">
        <h2>{props.name}</h2>
        <p>Some information about this bias</p>
      </div>
    )
}

function Next() {
  return (
    <button className="next-btn">
      <p>next...</p>
    </button>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;

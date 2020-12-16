import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home"><h1>Ameliate</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <Container>
        <div className="Content">
          <h2>Hello World</h2>
          <p>Some more details...</p>
          <Bias name="All or Nothing"/>
          <Bias name="Catastrophising"/>
          <Bias name="Imperatives"/>
          <Bias name="Labelling"/>
          <Next/>
        </div>
      </Container>

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

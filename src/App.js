import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import Deck from "./components/Deck";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    if (this.state.count == 0) {
      return (
        <Container>
          <div className="Content">
            <h2>Hello World</h2>
            <p>Some more details...</p>
            <p>State {this.state.count}</p>
            <Bias name="All or Nothing"/>
            <Bias name="Catastrophising"/>
            <Button variant="primary" size="lg" onClick={() => this.setState({count: this.state.count += 1})}>Next...</Button>
          </div>
        </Container>
      )
    } else {
      return (
        <Container>
          <div className="Content">
            <h2>Hello World</h2>
            <p>Some more details...</p>
            <p>State {this.state.count}</p>
            <Bias name="Imperatives"/>
            <Bias name="Labelling"/>
            <Button variant="primary" size="lg" onClick={() => this.setState({count: this.state.count += 1})}>Next...</Button>
          </div>
        </Container>
      );
    }
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

function App() {
  return (
    <div>
      <Header/>
      <Deck />
    </div>
  );
}

export default App;

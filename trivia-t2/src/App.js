// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from './components/Lobby';
import Game from './components/Game';
import Login from './components/Login';

import { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://trivia.tallerdeintegracion.cl/connect');

export default class App extends Component {
  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
  }

  render (){
    return (
      <Router>
        <div className="App">
          <div className='content'>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/lobby' element={<Lobby/>}/>
              <Route path='/game' element={<Game/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  } 
}




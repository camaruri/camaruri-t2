import React, {useState} from "react";
import {Input} from 'antd';
// import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useNavigate } from "react-router-dom";
// import { client } from "websocket";

import clientConnection from "../client";

const { Search } = Input;
// const { Text } = Typography;
// const { Meta } = Card;
// const client = new W3CWebSocket('ws://trivia.tallerdeintegracion.cl/connect');

function Lobby(props) {
    const [state, setState] = useState({
        username: '',
        isLoggedIn: false,
    });

    const [error, setError] = useState(Boolean);
    const [errorMessage, setErrorMessage] = useState('')

    const [lobby, setLobby] = useState(false);
    const [waiting, setWaiting] = useState('');
    const [players, setPlayers] = useState('');
    
    const navigate = useNavigate();
    // const location = useLocation();

    // if (location.state != null && state.username === '') {
    //     console.log("get insie")
    //     setState({
    //         isLoggedIn: true,
    //         username: location.state.username
    //     })
    // }
    

    clientConnection.onmessage = function (event) {
        const parseMessage = JSON.parse(event.data);
        if (parseMessage.type === "lobby"){
            setWaiting(parseMessage.message);
            setPlayers(parseMessage.players);
            setLobby(true);
        } else {
            console.log("go to game view...");
            navigate("/game", {state: {isLoggedIn:true, username: state.username}});
        }
      }

    const onLoginClicked = (value, setState, setError, setErrorMessage, setLobby, setPlayers, setWaiting) => {
        if (value !== '') {
            const dataJoin = JSON.stringify({
                type: "join",
                id: 'aeaaa234-cf47-4a35-883f-9c48bed87656',
                username: value
            })
            clientConnection.send(dataJoin);
            clientConnection.onmessage = function (event) {
                handleReceiveMessage(event.data, setState, value, setLobby, setPlayers, setWaiting);
              }
        } else {
            setError(true)
            setErrorMessage('You must to enter a userrname')
        }
      }


    const handleReceiveMessage = (message, setState, value, setLobby, setPlayers, setWaiting) => {
        const parseMessage = JSON.parse(message);
        if (parseMessage.type === "accepted") {
            setState({
                isLoggedIn: true,
                username: value
            })
        }
        
    }

    return (
        <div className="main" id='wrapper'>
            {state.isLoggedIn ? 
            <div>
                <h1>
                    Already Login
                    {"\n"  +  state.username}
                </h1>
            </div>
            :
            !lobby ? 
            <div style={{ padding: '200px 40px' }}>
                <h1>Login Lobby</h1>
                <h3>Type your username to start..</h3>
            <Search
                placeholder="Enter Username"
                enterButton="Login"
                size="large"
                onSearch={value => onLoginClicked(value, setState, setError, setErrorMessage, setLobby, setWaiting, setPlayers  )}
            />
            {   (error) && (
                <p style={{color: "red"}}>{errorMessage}</p>
            )}
            </div>
            :
            <div style={{ padding: '200px 40px' }}>
                <h1>Waiting Lobby</h1>
                <p>{waiting}</p>
                <p>Others players: {players}</p>
            </div>
            } 
        </div>

    )
}

export default Lobby
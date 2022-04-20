import React, {useState} from "react";
import {Input} from 'antd';
// import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useNavigate } from "react-router-dom";
// import { client } from "websocket";

import clientConnection from "../client";
const { Search } = Input;



function Login(props) {
    // const [state, setState] = useState({
    //     username: '',
    //     isLoggedIn: false,
    // });

    const [error, setError] = useState(Boolean);
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate();

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

      const handleReceiveMessage = (message) => {
        const parseMessage = JSON.parse(message);
        if (parseMessage.type === "accepted") {
            // setState({
            //     isLoggedIn: true,
            //     username: value
            // })
            navigate("/lobby");
        }
        
        
    }


    return (
        <div style={{ padding: '200px 40px' }}>
        <h1>Login Lobby</h1>
        <h3>Type your username to start..</h3>
    <Search
        placeholder="Enter Username"
        enterButton="Login"
        size="large"
        onSearch={value => onLoginClicked(value,setError, setErrorMessage )}
    />
    {   (error) && (
        <p style={{color: "red"}}>{errorMessage}</p>
    )}
    </div>
    )
}


export default Login
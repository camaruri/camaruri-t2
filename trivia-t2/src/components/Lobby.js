import React, {useState} from "react";
// import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useNavigate } from "react-router-dom";
// import { client } from "websocket";

import clientConnection from "../client";

// const { Text } = Typography;
// const { Meta } = Card;
// const client = new W3CWebSocket('ws://trivia.tallerdeintegracion.cl/connect');

function Lobby(props) {

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
            navigate("/game");
        }
      }



    return (
        <div className="main" id='wrapper'>
            <div style={{ padding: '200px 40px' }}>
                <h1>Waiting Lobby</h1>
                <p>{waiting}</p>
                <p>Others players: {players}</p>
            </div>
        </div>

    )
}

export default Lobby
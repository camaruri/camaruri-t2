import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import clientConnection from "../client";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Lobby(props) {

    const [waiting, setWaiting] = useState('');
    const [players, setPlayers] = useState({});
    
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
            console.log("The players are ", parseMessage)
        } else {
            navigate("/game");
        }
      }
      
      

    return (
        <Card>
            <CardContent  sx={{ maxWidth: 800, margin: '10% 20% 10% 25%', backgroundColor: '#F5F5DC'}}>
                <div className="main" id='wrapper'>
                    <div style={{ padding: '200px 40px' }}>
                        <h1>Waiting Lobby</h1>
                        <p>{waiting}</p>
                        {players.length > 0 && (
                            <div>
                                <p>Others players:</p>
                                {players.map((item, key) => {
                                            return <li key={key}>{item}</li>
                                        })}
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>

    )
}

export default Lobby
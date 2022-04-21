import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import clientConnection from "../client";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Lobby(props) {

    const [waiting, setWaiting] = useState('');
    const [players, setPlayers] = useState({});
    
    const navigate = useNavigate();
    

    clientConnection.onmessage = function (event) {
        const parseMessage = JSON.parse(event.data);
        if (parseMessage.type === "lobby"){
            setWaiting(parseMessage.message);
            setPlayers(parseMessage.players);
        } else {
            navigate("/game");
        }
      }
      
      

    return (
        <Card sx={{textAlign: '-webkit-center', marginTop:  '100px',}}>
            <CardContent  sx={{ maxWidth: 800, backgroundColor: '#F5F5DC'}}>
                <div>
                    <div>
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
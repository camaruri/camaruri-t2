import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function Winners (props) {
    
    return (
        <Card sx={{ width: '500px', margin: 'auto', marginTop: '100px', backgroundColor: '#F5F5DC'}}>
                <CardContent>
                    <h1>Winners:</h1>
                    <div style={{textAlign: '-webkit-center'}}>
                        <table class="table table-striped" style={{width: '-webkit-fill-available'}}>
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Username</th>
                                    <th>Score</th>
                                    <th>Streak</th>
                                </tr>   
                            </thead>
                            <tbody style={{textAlignLast: 'center'}}>
                            {props.scores.map((item, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.score}</td>
                                    <td>{item.streak}</td>
                                </tr>
                            ))}
                                
                            </tbody>
                        </table>
                    </div>
                </CardContent>

        </Card>
    )
}

export default Winners

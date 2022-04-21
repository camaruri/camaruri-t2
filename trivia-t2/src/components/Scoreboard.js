import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function ScoreBoard (props) {
    function insertUser(jsonData, userInfo) {
        if (jsonData[0] === undefined) {
            jsonData[0] = userInfo
            return null
        }
        else {
            for (let index = 0; index < jsonData.length; index++) {
                if (userInfo.score > jsonData[index].score) {
                    jsonData[index] = userInfo
                    return null
                }
                
            }
            jsonData.push(userInfo)
        }  
    }

    function makeJson(props) {
        var jsonData = []
        if (props.scores !== undefined) {
            const users = Object.keys(props.scores)
            const scores = Object.values(props.scores)
            for (let index = 0; index < users.length; index++) {
                const user = users[index];
                const score = scores[index]
                const userInfo = {'username': user, 'score': score}
                insertUser(jsonData, userInfo)
            }
        }
        return jsonData
    }

    const jsonDisplay = makeJson(props);
    
    return (
        <Card sx={{ height: 600, margin: '5px', backgroundColor: '#F5F5DC'}}>
                <CardContent>
                    <h1>Scores:</h1>
                    <div style={{textAlign: '-webkit-center'}}>
                        <table class="table table-striped" style={{width: '-webkit-fill-available'}}>
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Username</th>
                                    <th>Score</th>
                                </tr>   
                            </thead>
                            <tbody style={{textAlignLast: 'center'}}>
                            {jsonDisplay.map((item, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.score}</td>
                                </tr>
                            ))}
                                
                            </tbody>
                        </table>
                    </div>
                </CardContent>

        </Card>
    )
}

export default ScoreBoard

import React from "react";
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';



function Streak(props) {

    return (
        <Card sx={{ height: 50, backgroundColor: '#F5F5DC'}}>
                <CardContent>
                    {(props.streak.username !== '') ?
                        <span
                        style={{fontWeight: 'bold', fontSize: '20px'}}
                        >The player {props.streak.username} has {props.streak.streak} questions streak!!</span>
                        :
                        <span
                        style={{fontWeight: 'bold', fontSize: '20px'}}
                        >There is no player who has a streak</span>
                    }
                </CardContent>

        </Card>
    )
}

export default Streak
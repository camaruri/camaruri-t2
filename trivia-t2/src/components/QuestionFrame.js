import React from "react";
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import ButtonQuestion from "./ButtonQuestion";
import ChatQuestion from "./ChatQuestion";
import TextQuestion from "./TextQuestion";


function QuestionFrame (props) {
    function assignComponent(type) { 
        if (type === "button") {
            return (
                <ButtonQuestion
                question={props.questionInfo.question_title}
                options={props.questionInfo.question_options}
                />
            )
        }
        else if (type === "chat") {
            return (
                <ChatQuestion
                question={props.questionInfo.question_title}
                />
            )
        }
        else if (type === "text") {
            return (
                <TextQuestion
                question={props.questionInfo.question_title}
                />
            )
        }
    }

    return (
        <Card sx={{ maxWidth: 800, margin: '10% 20% 10% 25%', backgroundColor: '#F5F5DC'}}>
            {
                <CardContent>
                    {props.questionInfo.question_id !== '' ? 

                    <div>
                        <h1 style={{alignSelf:'center'}}>Question: {props.questionInfo.question_id}</h1>
                        <h1 style={{alignSelf:'right'}}>Timer: {props.timer}</h1>
                        {assignComponent(props.questionInfo.question_type)}
                    </div>
                    :
                    <div>
                        <h1>You are waiting to a question</h1>
                        <p>{props.timer} seconds left</p>
                    </div>
                    }
                </CardContent>
            }

        </Card>
    )
}

export default QuestionFrame
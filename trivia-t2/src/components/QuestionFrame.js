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
    // const [answer, setAnswer] = useState(null)
    const isValid = true

    function assignComponent(type) { 
        if (type === "button") {
            return (
                <ButtonQuestion
                question={props.questionInfo.question_title}
                question_id={props.questionInfo.question_id}
                options={props.questionInfo.question_options}
                isValid={isValid}
                />
            )
        }
        else if (type === "chat") {
            return (
                <ChatQuestion
                question={props.questionInfo.question_title}
                question_id={props.questionInfo.question_id}
                />
            )
        }
        else if (type === "text") {
            return (
                <TextQuestion
                question={props.questionInfo.question_title}
                question_id={props.questionInfo.question_id}
                />
            )
        }
    }

    return (
        <Card sx={{ height: 600, margin: '5px', backgroundColor: '#F5F5DC'}}>
            {
                <CardContent>
                    {props.questionInfo.question_id !== '' ? 

                    <div>
                        <h1>Question: {props.questionInfo.question_id}</h1>
                        <h1>Timer: {props.timer}</h1>
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
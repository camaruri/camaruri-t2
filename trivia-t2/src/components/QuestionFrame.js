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
    // const [type, setType] = useState('')
    // setType(props.questionInfo.question_type)
    console.log("Get inside the question frame and change the question...", props);
    function assignComponent(type) { 
        console.log("The type is: ", type);
        if (type === "button") {
            return (
                <ButtonQuestion/>
            )
        }
        else if (type === "chat") {
            return (
                <ChatQuestion/>
            )
        }
        else if (type === "text") {
            return (
                <TextQuestion/>
            )
        }
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div>
                    <h1 style={{alignSelf:'center'}}>Question: {props.questionInfo.question_id}</h1>
                    <h1 style={{alignSelf:'right'}}>Timer: {props.questionInfo.question_id}</h1>
                </div>

            </CardContent>
            {assignComponent(props.questionInfo.question_type)}
        </Card>
    )
}

export default QuestionFrame
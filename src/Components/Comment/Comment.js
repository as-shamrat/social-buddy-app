import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Comment = (props) => {
    const { body, name, email } = props.comment;



    return (
        <div style={{ width: '75%px', margin: '10px auto' }}>

            <Card>
                <CardActionArea>
                    <CardContent>
                        <h2>name: {name}</h2>
                        <h3>Email: {email}</h3>
                        <h4>Comment: {body}</h4>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
            </Card>

        </div>
    );
};

export default Comment;
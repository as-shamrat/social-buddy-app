import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Post = (props) => {
    const { title, body, id } = props.post;
    return (
        <div style={{ width: '90%', padding: '10px 30px', margin: '0 auto' }}>



            <Card>
                <CardContent>

                    <h1>title: {title}</h1>
                    <h3>body: {body}</h3>

                </CardContent>
                <CardActions>
                    <Link to={"/post/" + id}><button>see more</button></Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;
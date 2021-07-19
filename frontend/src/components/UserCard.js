import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Avatar,
  Tooltip
} from '@material-ui/core';
import {
  blue, green, orange, purple, red
} from '@material-ui/core/colors';
import { Email } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 150,
    marginRight: 10,
    marginBottom: 10
  },
  content: {
    backgroundColor: 'black'
  },
  button: {
    fontSize: 12
  }
});

const avatarColors = [
  blue[800],
  green[500],
  orange[500],
  purple[800],
  red[800],
];

const getColor = () => {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)];
}

const UserCard = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={ classes.root }>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: getColor() }}>
            { user.name.slice(0, 1).toUpperCase() }
          </Avatar>
        }
        title={ user.name }
      />
      <CardContent>
        <Tooltip title={user.email}>
          <Email color="primary" />
        </Tooltip>
      </CardContent>
      <CardActions>
        <Button
          className={ classes.button }
          onClick={ e => console.log(e) }
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default UserCard;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  Fab,
  Tooltip
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 150,
    height: 180,
    marginRight: 10,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const CreateCard = () => {
  const classes = useStyles();

  return (
    <Card className={ classes.root }>
      <Tooltip title="Create user">
        <Fab
          color="primary"
          onClick={ e => console.log(e) }
        >
          <Add />
        </Fab>
      </Tooltip>
    </Card>
  )
}

export default CreateCard;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

 function Chips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Power"
        clickable
        color="Primary"

      />
      <Chip
        avatar={<Avatar>S</Avatar>}
        label="Novel"
        clickable
        color="primary"
       
      />
      
      <Chip
        avatar={<Avatar>L</Avatar>}
        label="English"
        clickable
        color="primary"
       
      />

      <Chip
        avatar={<Avatar>C</Avatar>}
        label="Cool"
        clickable
        color="primary"
       
      />
    </div>
  );
}
export default Chips;
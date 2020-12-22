import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Title from './BlogPostTitle'
import Details from './BlogPostDetails'
<<<<<<< HEAD
=======
import Navbar from '../Navbar/Navbar'
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '55%',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
    margin:'50px auto'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="flex-start" alignItems="center" >
        <Grid item xs={12}>
<<<<<<< HEAD
=======
          <Navbar/>
        </Grid>
        <Grid item xs={12}>
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
          <Title/>
        </Grid>
        <Grid item xs={12}>
          <Details />
<<<<<<< HEAD
        </Grid>
=======
        </Grid> 
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
      </Grid>
    </div>
  );
}

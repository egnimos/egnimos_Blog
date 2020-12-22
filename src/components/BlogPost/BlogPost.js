import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogPostContainer from './BlogPostContainer'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      <Grid container >
        <Grid item xs={12}>
          <Navbar/>
        </Grid>
        <Grid item xs={12}>
          <BlogPostContainer/>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid> 
      </Grid>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '70px'
  },
  paper: {
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
    },
    margin: 'auto',
    maxWidth: '900px',
    boxShadow: 'none'
  },
  image: {
    width: 300,
    height: 200,
    
  },
  cover: {
    height: '500px',
    margin:'auto',
    [theme.breakpoints.down('md')]: {
        maxHeight: '400px'
    },
    [theme.breakpoints.down('xs')]: {
        maxHeight: '300px'
    },
    
    boxShadow: "0px 20px 200px 100px black",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  details : {
      // margin: '20px',
    // [theme.breakpoints.up("sm")]: {
    //   paddingTop: '10px',
    //   paddingLeft: '30px'
    // }
  },
  bold: {
    fontWeight: '600',
    paddingBottom: '10px'
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}  >
            <Grid item xs container className={classes.details} style={{textAlign: 'center'}} direction="column"  >
              <Grid item xs>
<<<<<<< HEAD
                <Typography gutterBottom variant="body2"  color="primary" style={{fontWeight: '600'}}>
                  Trending Blog
                </Typography>
                <Typography variant="h4" gutterBottom className={classes.bold} style={{width: '60%', margin: 'auto'}}>
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
                <Typography variant="body1"  className={classes.bold}>
=======
                <Typography gutterBottom variant="body2"  >
                  Trending Blog
                </Typography>
                <Typography variant="h4" gutterBottom className={classes.bold}>
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
                <Typography variant="body1" color="textSecondary" className={classes.bold}>
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
                  Eric Mathew
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary">
                  Oct 19,2018
                </Typography>
              </Grid>
            </Grid>
          </Grid>
<<<<<<< HEAD
          <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px',padding: '16px'}} >
=======
          <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px'}} >
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
            <Card >
              <CardMedia
              className={classes.cover}
              image="https://source.unsplash.com/random"
              title="Live from space album cover"
            />
            </Card>
          </Grid>
          <Grid item xs={12}  >
            <Grid item xs container className={classes.details} direction="column" style={{padding: '16px'}}   >
              <Grid item >
                <Typography gutterBottom variant="subtitle1" className={classes.bold}  >
                  Trending Blog
                  HHow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honour
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How How to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourto optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb & Insdeo ads for sus and honour
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How to optimize your Fb & Iads for success and honour
                  How to optimize How to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honouryour Fb & Instagram video ads for success and honour
                  How to optimize yo video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
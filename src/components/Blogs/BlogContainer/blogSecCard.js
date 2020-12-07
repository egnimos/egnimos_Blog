import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    //   minWidth: '200px',
    //   width: '800px',
    height: '500px',
    margin:'auto',
    //  [theme.breakpoints.down('lg')]: {
    //     maxHeight: '400px'
    // },
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
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}  style={{margin: 'auto', marginBottom: '20px'}} >
          <Card >
            <CardMedia
            className={classes.cover}
            image="https://source.unsplash.com/random"
            title="Live from space album cover"
          />
          </Card>
            {/* <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://source.unsplash.com/random" />
            </ButtonBase> */}
          </Grid>
          <Grid item xs={12} container className={classes.details}>
            <Grid item xs container  direction="column" >
              <Grid item xs>
                <Typography gutterBottom variant="body2" color="primary" >
                  BLOG POST
                </Typography>
                <Typography variant="h4" gutterBottom style={{fontWeight: 'bold'}}>
                  How to optimize your Facebook & Instagram video ads for success
                </Typography>
                <Typography gutterBottom variant="body1" color="textSecondary">
                  It features a large set of commonly used UI components so that developers can focus on adding functionality to applications instead of spending so much time on UI implementation
                </Typography>
              </Grid>
              <Grid item style={{margin: '20px',marginLeft: '0px'}}>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
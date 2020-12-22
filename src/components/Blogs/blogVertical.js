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
    height: 200,
    boxShadow: "0px 20px 200px 100px black",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  details : {
    [theme.breakpoints.up("sm")]: {
      paddingTop: '10px',
      paddingLeft: '30px'
    }
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} >
          <Grid item xs={5}  style={{margin: 'auto', marginBottom: '20px'}} >
          <Card>
            <CardMedia
            className={classes.cover}
            image="https://source.unsplash.com/random"
            title="Live from space album cover"
          />
          </Card>
          </Grid>
          <Grid item xs={7}  container className={classes.details}>
            <Grid item xs container direction="column" >
              <Grid item xs>
                <Typography gutterBottom variant="body2" color="primary" >
                  TENDING
                </Typography>
<<<<<<< HEAD
                <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
=======
                <Typography variant="h5" gutterBottom style={{fontWeight: 'bold'}}>
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
                  Phone looks premium under the gradient light
                </Typography>
              <Grid item>
                <Typography variant="body2" >
                  by
                  <Typography variant="body2" component="span" style={{ cursor: 'pointer',fontWeight: 'bold' }}> Prakash Thakur</Typography> , 2 days ago
                </Typography>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
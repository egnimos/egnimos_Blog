
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
    padding: theme.spacing(3),
    },
    // margin: 'auto',
    // maxWidth: '300px',
    boxShadow: 'none'
  },
  image: {
    width: 300,
    height: 200,
  },
  cover: {
    height: 300,
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
      paddingTop: '15px',
      paddingRight: '50px'
    }
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm={12}  style={{margin: 'auto'}} >
          <Card>
            <CardMedia
            className={classes.cover}
            image="https://source.unsplash.com/random"
            title="Live from space album cover"
          />
          </Card>
          </Grid>
          <Grid item xs={12} sm={12}  className={classes.details}>
                <Typography variant="h6" gutterBottom style={{fontWeight: '600'}}>
                  Phone looks premium under the gradient light
                </Typography>
                <Typography variant="body2" >
                  by
                </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
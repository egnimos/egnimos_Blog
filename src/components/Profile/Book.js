
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
    maxWidth: '300px',
    boxShadow: 'none'
  },
  image: {
    width: 300,
    height: 200,
  },
  cover: {
    height: 200,
    width: 140,
    // margin: 'auto',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  details : {
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
        {/* <Grid container> */}
          <Grid item xs={12} sm={12}  style={{margin: 'auto', marginBottom: '20px'}} >
          <Card style={{boxShadow: 'none'}}>
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
          <Grid item xs={12} sm={12}   container className={classes.details}>
            <Grid item xs container direction="column" >
              <Grid item xs>
                <Typography gutterBottom variant="body2"  >
                  Prakash Thakur
                </Typography>
                <Typography variant="h6"  color="secondary" gutterBottom style={{fontWeight: 'bold'}}>
                    Stay & Fight
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                  It features a large set of commonly used UI components so that developers can focus on adding functionality to applications instead of spending so much time on UI implementation
                </Typography> */}
              </Grid>
            </Grid>
            
          {/* </Grid> */}
        </Grid>
      </Paper>
    </div>
  );
}
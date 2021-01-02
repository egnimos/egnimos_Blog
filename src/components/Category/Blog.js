
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
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 200,
      borderRadius: '4px',
    },
    boxShadow: 'none',
    borderRadius: '15px',
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
      paddingRight: '10px'
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: '15px',
      paddingRight: '5px',
      paddingBottom: '30px',
    }
  },
  heading: {
    lineHeight: '120%',
    fontSize: '0.9rem'
  },
  readMoreWrapper: {
    color: 'black',
    textDecoration: 'underline',
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: 'pointer',
   },
  },
  readMore: {
    fontWeight: 'bold',
    fontSize: '0.8rem',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm={12}  style={{margin: 'auto'}} >
          <Card style={{boxShadow: 'none'}}>
            <CardMedia
            className={classes.cover}
            image="https://source.unsplash.com/random"
            title="Live from space album cover"
          />
          </Card>
          </Grid>
          <Grid item xs={12} sm={12}  className={classes.details}>
            <Grid  container>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom className={classes.heading}  style={{fontWeight: 'bold'}}>
                  Webinar: Imporve content marketing through visual storytelling horizontal
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.readMoreWrapper}>
                <Typography variant="body2" className={classes.readMore}>
                  Read more
                </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
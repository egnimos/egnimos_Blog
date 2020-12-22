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
  // [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
    // },
    maxWidth: '700px',
    boxShadow: 'none'
  },
  cover: {
    height: 150,
    width: 150,
    // boxShadow: "0px 20px 200px 100px black",
    borderRadius: '5px',
  },
  image: {
    flexBasis: 0,
  },
  details : {
    // [theme.breakpoints.up("sm")]: {
      paddingTop: '10px',
      paddingLeft: '30px',
      // }
    },
  heading: {
    lineHeight: '120%',
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
    fontSize: '1.1rem',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={4} className={classes.image} >
          <Card>
            <CardMedia
            className={classes.cover}
            image="https://source.unsplash.com/random"
            title="Live from space album cover"
          />
          </Card>
          </Grid>
          <Grid item xs={8}  container className={classes.details}>
            <Grid item xs container direction="column" >
              <Grid item xs>
                {/* <Typography gutterBottom variant="body2" color="primary" >
                  TENDING
                </Typography> */}
                <Typography variant="h6" gutterBottom className={classes.heading}  style={{fontWeight: 'bold'}}>
                  Webinar: Imporve content marketing through visual storytelling
                </Typography>
              <Grid item>
                <div className={classes.readMoreWrapper}>
                <Typography variant="body2" className={classes.readMore}>
                  Read more
                </Typography>
                </div>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
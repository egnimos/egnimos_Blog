
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
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    boxShadow: 'none',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  details : {
      margin: 'auto',
    [theme.breakpoints.up("md")]: {
      paddingTop: '20px',
    },
    [theme.breakpoints.down("xs")]: {
    //   paddingTop: '15px',
    //   paddingRight: '5px',
      paddingBottom: '30px',
    }
  },
  heading: {
    // lineHeight: '120%',
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
    fontSize: '1rem',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12} lg={8}  className={classes.details}>
              <Grid item xs={12}>
                <Typography variant="h6"  gutterBottom className={classes.heading}  style={{fontWeight: 'bold'}}>
                  Category Name
                </Typography>
                <Typography variant="subtitle2" color="grey" gutterBottom className={classes.heading} >
                  25 project file
                </Typography>
                </Grid>
              <Grid item xs={12 }>
              <Typography variant="subtitle2" gutterBottom  style={{ paddingTop: '15px', textAlign: 'left'}}>
                  The file hold all the data in various format if you arrange it correctly it is easy to find.
                </Typography>
                {/* <div className={classes.readMoreWrapper}>
                <Typography variant="body2" className={classes.readMore}>
                  Read more sdflkml lsdkfjfl sldfj sldfkj dsf lksdff lsdjf 
                </Typography>
                </div> */}
            </Grid>
            </Grid>
          </Grid>
      </Paper>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Profile from '../Profile'
import Review from '../Review'
import Genres from '../Genres'
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
<<<<<<< HEAD
    // padding: theme.spacing(2),
=======
    padding: theme.spacing(2),
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container  direction="row" justify="flex-start" alignItems="stretch">
        <Grid item xs={12} lg={4} style={{ background: '#403070',}} >
          <Hidden only="md">
            <Profile />
          </Hidden>
            <Hidden lgUp smDown>
            <Grid container  >
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Profile />
                </Grid>
                <Grid item xs={3} />
            </Grid>
            </Hidden>
        </Grid>
        <Grid item xs={12} lg={6}>
            <Review />
        </Grid>
        <Grid item xs={12} lg={2}>
            <Genres />
        </Grid>
      </Grid>
    </div>
  );
}

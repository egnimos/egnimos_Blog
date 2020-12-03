import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BookContainer from './BookContainer'
import Typography from '@material-ui/core/Typography'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '25px',
    paddingTop: '50px',
    minHeight: '100vh',
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid item style={{marginTop: '5px'}} >
                    <KeyboardBackspaceIcon color="secondary"  />
                </Grid>
                <Grid item>
                    <Typography  variant="h6" component="span" color="secondary"  style={{marginLeft : '5px'}}>
                        Back to Review 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography  variant="h2"  color="secondary"  style={{ fontWeight:'bold',marginTop: '30px' }}>
               98 REVIEWS 
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <BookContainer />
        </Grid>
      </Grid>
    </div>
  );
}


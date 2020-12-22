import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
<<<<<<< HEAD
// import BookContainer from './BookContainer'
import BookContainer from './blogs'
import Typography from '@material-ui/core/Typography'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link  } from "react-router-dom";
=======
import BookContainer from './BookContainer'
import Typography from '@material-ui/core/Typography'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181


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
<<<<<<< HEAD
                  <Link  to="/" style={{textDecoration: 'none',color: 'inherit'}} >
                    <KeyboardBackspaceIcon color="secondary"  />
                  </Link>
                </Grid>
                <Grid item>
                  <Link  to="/" style={{textDecoration: 'none',color: 'inherit'}} >
                    <Typography  variant="h6" component="span" color="secondary"  style={{marginLeft : '5px'}}>
                        Back to Home
                    </Typography>
                  </Link>
=======
                    <KeyboardBackspaceIcon color="secondary"  />
                </Grid>
                <Grid item>
                    <Typography  variant="h6" component="span" color="secondary"  style={{marginLeft : '5px'}}>
                        Back to Review 
                    </Typography>
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography  variant="h2"  color="secondary"  style={{ fontWeight:'bold',marginTop: '30px' }}>
<<<<<<< HEAD
              Blog Posts
=======
              98 REVIEWS 
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <BookContainer />
        </Grid>
      </Grid>
    </div>
  );
}


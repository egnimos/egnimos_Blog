import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: '5px',
  },
  input: {
    // padding: '5.5px 14px'
  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" className={classes.large} />
        {/* <Typography component="h1" variant="h5">
          Profile Pic
        </Typography> */}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <Typography variant="subtitle1" style={{fontWeight: '600'}} gutterBottom>
                Full Name
              </Typography>
              <TextField
                autoComplete="name"
                name="firstName"
                variant="outlined"
                className={classes.input}
                required
                fullWidth
                id="firstName"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{fontWeight: '600'}} gutterBottom>
                Email
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{fontWeight: '600'}} gutterBottom>
                Phone Number
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="number"
                name="number"
                autoComplete="number"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{fontWeight: '600'}} gutterBottom>
                City
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                name="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" style={{fontWeight: '600'}} gutterBottom>
                State
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="state"
                name="state"
                autoComplete="state"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" style={{fontWeight: '600'}} gutterBottom>
                Zip Code
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="zipcode"
                name="zipcode"
                autoComplete="zipcode"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{fontWeight: '600'}} gutterBottom>
                Country
              </Typography>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="country"
                name="country"
                autoComplete="country"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save Changes
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Back To Home
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

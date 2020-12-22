//Footer 
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
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
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  bold: {
    fontWeight: '500'
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="lg">
        <Grid container spacing={5} >
          <Grid item xs={12} sm={4}>

        <Grid container spacing={3} >
          <Grid item xs={9}>
            <Typography variant="h6" className={classes.bold}>My sticky footer can be found here.My sticky footer can be found here.</Typography>
          </Grid>
          <Grid item xs={6}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item >
              <InstagramIcon/>
            </Grid>
            <Grid item >
              <FacebookIcon/>
            </Grid>
            <Grid item>
              <TwitterIcon/>
            </Grid>
            <Grid item>
              <YouTubeIcon/>
            </Grid>

            </Grid>
          </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            
          <Typography variant="h5" className={classes.bold}>Company</Typography>
            <Typography variant="body1">About Us</Typography>
            <Typography variant="body1">Jobs</Typography>
            <Typography variant="body1">Press</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Typography variant="h5" className={classes.bold}>Legal</Typography>
            <Typography variant="body1">Term & Condition</Typography>
            <Typography variant="body1">Privacy Policy</Typography>
          </Grid>
      </Grid>
          {/* <Copyright /> */}
        </Container>
      </footer>
  );
}
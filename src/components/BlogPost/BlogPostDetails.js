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
    boxShadow:'none'
  },
  image: {
    width: 300,
    height: 200,
    
  },
  cover: {
    height: '300px',
    margin:'auto',
    [theme.breakpoints.down('md')]: {
        maxHeight: '400px'
    },
    [theme.breakpoints.down('xs')]: {
        maxHeight: '300px'
    },
    
    boxShadow: "0px 20px 200px 100px black",
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  details : {
      margin: '20px',
  },
  bold: {
    fontWeight: '600',
    paddingBottom: '10px'
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          {/* 1 Point */}
          <Grid item xs={12} container className={classes.details}>
            <Grid item xs container  direction="column"  >
              <Grid item xs>
                <Typography gutterBottom variant="h5" style={{fontWeight: 'bold'}}>
                  1. How to optimize your Facebook & Instagram 
                </Typography>
                <Typography gutterBottom variant="subtitle1" className={classes.bold}  >
                  Trending Blog
                  HHow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honour
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How How to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourto optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb & Insdeo ads for sus and honour
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px'}}  >
              <Card >
                <CardMedia
                className={classes.cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
              />
              </Card>
            </Grid>
            <Grid item xs container  direction="column"  >
              <Grid item xs>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How How to optimize your Fb & Instagram video ads for success and honour
                  Ho optimize your Fb gram video ads for success and honourto optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb & Insdeo ads for sus and honour
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px'}} >
              <Card >
                <CardMedia
                className={classes.cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
              />
              </Card>
            </Grid>
          </Grid>

            {/* 2 Point */}
            <Grid item xs={12} container className={classes.details}>
              <Grid item xs container  direction="column"  >
                <Grid item xs>
                  <Typography gutterBottom variant="h5" style={{fontWeight: 'bold'}}>
                    2. How to optimize your Facebook & Instagram 
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" className={classes.bold}  >
                    Trending Blog
                    HHow to optimize your Fb & Instagram video ads for success and honour
                    How to optimize your Fb gram video ads for success and honourow to optimize your Fb & Instagram video ads for success and honour
                    How to optimize your Fb gram video ads for success and honour
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" style={{borderLeft: '5px solid black',paddingLeft: '40px', fontWeight: 'bolder',borderRadius: '3px'}}  >
                    "How to optimize your Fb & Instagram video ads for success and honour
                    How to optimize your Fb gram video ads for success and honourow to optimize your Fb & Instagram video ads for success and honour
                    How to optimize your Fb gram video ads for success and honour"
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px'}}  >
                <Card >
                  <CardMedia
                  className={classes.cover}
                  image="https://source.unsplash.com/random"
                  title="Live from space album cover"
                />
                </Card>
              </Grid>
            </Grid>
          
          
          {/* 3 Point */}
          <Grid item xs={12} container className={classes.details}>
            <Grid item xs container  direction="column"  >
              <Grid item xs>
                <Typography gutterBottom variant="h5" style={{fontWeight: 'bold'}}>
                  3. How to optimize your Facebook & Instagram 
                </Typography>
                <Typography gutterBottom variant="subtitle1" className={classes.bold}  >
                  Trending Blog
                  HHow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honour
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How How to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourto optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb & Insdeo ads for sus and honour
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px'}}  >
              <Card >
                <CardMedia
                className={classes.cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
              />
              </Card>
            </Grid>
            <Grid item xs container  direction="column"  >
              <Grid item xs>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How How to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourto optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb & Insdeo ads for sus and honour
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px'}} >
              <Card >
                <CardMedia 
                  component='iframe'
                  className={classes.cover}
                  title='test'
                  src='https://www.youtube.com/embed/wKgaoZIOjJ4'
              />
              </Card>
            </Grid>
          </Grid>
        
        
        {/* 4 Point */}
          <Grid item xs={12} container className={classes.details}>
            <Grid item xs container  direction="column"  >
              <Grid item xs>
                <Typography gutterBottom variant="h5"  style={{fontWeight: 'bold'}}>
                  4. How to optimize your Facebook & Instagram 
                </Typography>
                <Typography gutterBottom variant="subtitle1" className={classes.bold}  >
                  Trending Blog
                  HHow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}  style={{marginTop: '20px', marginBottom: '20px'}} >
              <Card >
                <CardMedia
                className={classes.cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
              />
              </Card>
            </Grid>
        </Grid>
        
        {/* 5 Point */}
          <Grid item xs={12} container className={classes.details}>
            <Grid item xs container  direction="column"  >
              <Grid item xs>
                <Typography variant="h5" gutterBottom style={{fontWeight: 'bold'}}>
                  5. How to optimize your Facebook & Instagram 
                </Typography>
                <Typography gutterBottom variant="subtitle1" className={classes.bold}  >
                  Trending Blog
                  HHow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honour
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How How to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourto optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb & Insdeo ads for sus and honour
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px'}} >
              <Card >
                <CardMedia
                component='iframe'
                  className={classes.cover}
                  title='test'
                  src='https://www.youtube.com/embed/wKgaoZIOjJ4'
              />
              </Card>
            </Grid>
        </Grid>
        
        {/* 6 Point */}
          <Grid item xs={12} container className={classes.details}>
            <Grid item xs container  direction="column"  >
              <Grid item xs>
                <Typography gutterBottom variant="h5"  style={{fontWeight: 'bold'}}>
                  6. How to optimize your Facebook & Instagram 
                </Typography>
                <Typography gutterBottom variant="subtitle1" className={classes.bold}  >
                  Trending Blog
                  HHow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourow to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honour
                </Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How How to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourto optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb & Insdeo ads for sus and honour
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{marginTop: '20px', marginBottom: '20px'}} >
              <Card >
                <CardMedia
                className={classes.cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
              />
              </Card>
            </Grid>
            <Grid item xs container  direction="column"  >
              <Grid item xs>
                <Typography variant="subtitle1" gutterBottom className={classes.bold}>
                  How How to optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb gram video ads for success and honourto optimize your Fb & Instagram video ads for success and honour
                  How to optimize your Fb & Insdeo ads for sus and honour
                  How to optimize your Fb & Instagram video ads for success and honour
                </Typography>
              </Grid>
            </Grid>
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
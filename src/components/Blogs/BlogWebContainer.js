import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogBigCard from './BlogContainer/blogSecCard';
import SideBarContainer from './SideContainer/blogSideContainer'
import BlogHorizonContainer from './blogHorizonContainer';
import { makeStyles } from "@material-ui/core/styles";
// import BlogVerticalData from './blogVerticalContainer';
import BlogVerticalData from './BlogAlignVertical/BlogVerticalContainer';
import Hidden from '@material-ui/core/Hidden';
import Navbar from '../Navbar/Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80vw',
    marginTop: '120px',
    // border: '2px solid red',
    [theme.breakpoints.down("sm")]: {
      padding: "15px",
      width: '100vw',
      marginTop: '110px',
    },
    margin: 'auto'
  },
  paper: {
    margin: 'auto',
    boxShadow: 'none',
  },
}));


export default function NestedGrid() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container >
            {/* <Grid item sm={12}>
              <Navbar/>
            </Grid> */}
            <Grid item sm={12}  md ={8}>
              <BlogBigCard />
            </Grid>
            <Hidden smDown>
                <Grid
                item sm={5} md ={4}
                style={{
                    padding: "20px",
                }}
                >
                    <SideBarContainer />
                </Grid>
            </Hidden>
          
          <Grid item xs={12}>
            <BlogHorizonContainer />
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
                <BlogVerticalData />
            </Grid>
            <Grid item xs={12} md={6} >
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <BlogHorizonContainer />
          </Grid>
        </Grid>
      </div>
  );
}

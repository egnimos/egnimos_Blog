import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogBigCard from './BlogContainer/blogSecCard';
import SideBarContainer from './SideContainer/blogSideContainer'
import BlogHorizonContainer from './blogHorizonContainer';
import { makeStyles } from "@material-ui/core/styles";
// import BlogVerticalData from './blogVerticalContainer';
import BlogVerticalData from './BlogAlignVertical/BlogVerticalContainer';
import BlogWebContainer from './BlogWebContainer'
import Hidden from '@material-ui/core/Hidden';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
            <Grid item sm={12}>
              <Navbar/>
            </Grid>
          <Grid item xs={12}>
            <BlogWebContainer />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
  );
}

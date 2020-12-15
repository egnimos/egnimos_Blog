import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogBigCard from './BlogContainer/blogSecCard';
import SideBarContainer from './SideContainer/blogSideContainer'
import BlogHorizonContainer from './blogHorizonContainer';
import BlogVerticalData from './blogVerticalContainer';
import Hidden from '@material-ui/core/Hidden';
import Navbar from '../Navbar/Navbar'


export default function NestedGrid() {
  return (
    <Grid container style={{ padding: "30px", width: '70vw', margin: 'auto' }}>
    <Grid container>
        <Grid item sm={12}>
          <Navbar/>
        </Grid>
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
      </Grid>
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
  );
}

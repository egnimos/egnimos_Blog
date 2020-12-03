import React from "react";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../Header/headerContainer";
import SideBarContainer from "../Sidebar/SidebarContainer";
import BodyContainer from "../Body/BodyContainer";
import BlogBigCard from '../BlogContainer/blogSecCard';
import BlogContainer from '../BlogContainer/blogContainer';
import BlogHorizonContainer from './blogHorizonContainer';
import BlogVerticalData from './blogVerticalContainer';
import Hidden from '@material-ui/core/Hidden';



export default function NestedGrid() {
  return (
    <Grid container style={{ padding: "30px" }}>
    <Grid container>
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

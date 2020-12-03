
import React from "react";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../BlogContainer/header";
import SideBarContainer from "../Sidebar/SidebarContainer";
import BodyContainer from "../Body/BodyContainer";
import BodyContent from "../Body/Content";

import Blog from '../BlogContainer/blog'
import BlogCard from '../BlogContainer/blogCard'

export default function NestedGrid() {
  return (
    <Grid container >
      <Grid item xs={12}>
        <Grid container>
          <HeaderContainer />
        </Grid>
        <Grid 
          container
          style={{
            marginTop: '100px',
            padding: "20px",
          }}
        >
          <Blog />
        </Grid>
        <Grid 
          container
        >
          <BlogCard />
        </Grid>
        <Grid 
          container
        >
          <BodyContent />
        </Grid>
      </Grid>
      {/* <Grid item xs={12} sm={4} md={3}>
        <SideBarContainer />
      </Grid> */}
    </Grid>
  );
}

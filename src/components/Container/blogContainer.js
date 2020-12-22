
import React from "react";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../Navbar/Navbar";
import Blog from '../Blogs/BlogContainer/blog'

export default function NestedGrid() {
  return (
    <Grid container >
      <Grid item xs={12}>
        <Grid container>
          {/* <HeaderContainer /> */}
        </Grid>
        <Grid 
          container
          style={{
            marginTop: '100px',
            padding: "20px",
          }}
        >
          {/* <Blog /> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

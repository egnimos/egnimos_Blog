
import React from "react";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../Navbar/Navbar";
import Blog from '../Blogs/BlogContainer/blog'

export default function NestedGrid() {
  return (
    <Grid container >
      <Grid item xs={12}>
        <Grid container>
<<<<<<< HEAD
          {/* <HeaderContainer /> */}
=======
          <HeaderContainer />
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
        </Grid>
        <Grid 
          container
          style={{
            marginTop: '100px',
            padding: "20px",
          }}
        >
<<<<<<< HEAD
          {/* <Blog /> */}
=======
          <Blog />
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
        </Grid>
      </Grid>
    </Grid>
  );
}

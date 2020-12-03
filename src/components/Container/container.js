import React from "react";
import Grid from "@material-ui/core/Grid";
import HeaderContainer from "../Header/headerContainer";
import SideBarContainer from "../Sidebar/SidebarContainer";
import BodyContainer from "../Body/BodyContainer";

export default function NestedGrid() {
  return (
    <Grid container style={{ padding: "30px" }}>
      <Grid item xs={12} sm={8} md={9}>
        <Grid container>
          <HeaderContainer />
        </Grid>
        <Grid
          container
          style={{
            padding: "20px",
          }}
        >
          <BodyContainer />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <SideBarContainer />
      </Grid>
    </Grid>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Content />
        </Grid>
        <Grid item xs={4}>
          <Content />
        </Grid>
        <Grid item xs={4}>
          <Content />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2} style={{ alignItems: "center" }}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}

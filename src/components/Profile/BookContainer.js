import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./Book";
import Paper from '@material-ui/core/Paper';

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

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={4} sm={4} style={{marginTop: '30px'}} >
          <Content />
        </Grid><Grid item xs={12} md={4} sm={4} style={{marginTop: '30px'}}>
          <Content />
        </Grid><Grid item xs={12} md={4} sm={4} style={{marginTop: '30px'}}>
          <Content />
        </Grid>
        <Grid item xs={12} md={4} sm={4} style={{marginTop: '30px'}} >
          <Content />
        </Grid><Grid item xs={12} md={4} sm={4} style={{marginTop: '30px'}}>
          <Content />
        </Grid><Grid item xs={12} md={4} sm={4} style={{marginTop: '30px'}}>
          <Content />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container style={{ alignItems: "center"}}>
      <Grid item xs={12}>
        <Grid container spacing={1}  style={{ justifyItems: "center" }}>
          <Grid container item xs={12} style={{ justifyContent : "center" }}>
            <FormRow />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Paper>
    </div>
  );
}



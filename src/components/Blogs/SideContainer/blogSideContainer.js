import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./blogSideContent";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

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
        <Grid container item xs={12} >
          <Grid item xs={12}>
            <Content />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container spacing={3} style={{ alignItems: "center", marginBottom:'20px' }}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h4" color="primary" >
                    Similar Posts
                </Typography>
            </Grid>
      <Grid item xs={12}>
        <Grid container spacing={5} style={{ alignItems: "center" }}>
            <FormRow />
            <FormRow />
            <FormRow />
        </Grid>
      </Grid>
    </Grid>
    </Paper>
    </div>
  );
}


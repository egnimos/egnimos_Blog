import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./blogVertical";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
<<<<<<< HEAD
    paddingTop:'10px'
=======
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
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
        <Grid item xs={12}>
          <Content />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
<<<<<<< HEAD
      <Grid container  style={{ alignItems: "center", marginBottom:'20px' }}>
            <Grid item xs={12}>
                {/* <Typography gutterBottom variant="h4" color="primary" >
                    Popular Resources
                </Typography> */}
=======
      <Grid container spacing={3} style={{ alignItems: "center", marginBottom:'20px' }}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h4" color="primary" >
                    Popular Resources
                </Typography>
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
            </Grid>
      <Grid item xs={12}>
        <Grid container spacing={5} style={{ alignItems: "center" }}>
          <Grid container item xs={12} >
            <FormRow />
          </Grid>
          <Grid container item xs={12} >
            <FormRow />
          </Grid>
          <Grid container item xs={12} >
            <FormRow />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Paper>
    </div>
  );
}


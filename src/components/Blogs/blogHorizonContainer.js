import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./blog";
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
        <Grid item xs={12} md={4} sm={6} style={{marginTop: '30px'}} >
          <Content />
        </Grid><Grid item xs={12} md={4} sm={6}style={{marginTop: '30px'}}>
          <Content />
        </Grid><Grid item xs={12} md={4} sm={6}style={{marginTop: '30px'}}>
          <Content />
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
                    Latest BlogPost
                </Typography>
            </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}  style={{ justifyItems: "center" }}>
          <Grid container item xs={12} style={{ justifyContent : "center" }}>
            <FormRow />
          </Grid>
          {/* <Grid container item xs={12} >
            <FormRow />
          </Grid>
          <Grid container item xs={12} >
            <FormRow />
          </Grid> */}
        </Grid>
      </Grid>

    </Grid>
    </Paper>
    </div>
  );
}


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
  BlogHeading: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: '24px',
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: '15px',
    },
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={4} sm={6}  >
          <Content />
        </Grid><Grid item xs={12} md={4} sm={6}>
          <Content />
        </Grid><Grid item xs={12} md={4} sm={6}>
          <Content />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Grid container style={{ alignItems: "center", margin:'15px 0' }}>
            <Grid item xs={12}>
                <Typography  gutterBottom variant="h4" className={classes.BlogHeading} style={{fontWeight: '700'}} >
                    Latest BlogPost
                </Typography>
            </Grid>
      <Grid item xs={12}>
          <Grid container style={{ justifyContent : "flex-start" }}>
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
    </Paper>
    </div>
  );
}


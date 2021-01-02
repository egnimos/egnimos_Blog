import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./Blog";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import CategoryTitle from './CategoryTitle'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '120px',
    [theme.breakpoints.down("xs")]: {
        padding: '15px',
        paddingTop: '0px',
      },
    [theme.breakpoints.up("sm")]: {
        padding: '0 5vw'
    },
      
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
        <Grid item xs={12} md={3} sm={12}  >
          <CategoryTitle />
        </Grid>
        <Grid item xs={12} md={3} sm={4}>
          <Content />
        </Grid>
        <Grid item xs={12} md={3} sm={4}>
          <Content />
        </Grid>
        <Grid item xs={12} md={3} sm={4}>
          <Content />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container >
                <Grid item xs={12}>
                    <Typography  gutterBottom variant="h4" className={classes.BlogHeading} style={{fontWeight: '700'}} >
                        Category
                    </Typography>
                    <Typography  gutterBottom variant="h6"  className={classes.BlogHeading} style={{marginBottom: '20px'}}>
                        It containes various blogs including tech, sports, dance, finance, game, lifestyle etc.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container style={{ justifyContent : "flex-start" }}>
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
        </Paper>
    </div>
  );
}


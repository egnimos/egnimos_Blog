import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CategoryContainer from './CategoryContainer'
import Hidden from '@material-ui/core/Hidden';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'

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

  return (
      <div className={classes.root}>
        <Grid container >
            <Grid item sm={12}>
              <Navbar/>
            </Grid>
          <Grid item xs={12}>
            <CategoryContainer />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
  );
}

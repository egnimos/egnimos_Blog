import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Content from "./BlogVertical";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop:'10px'
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
            <Grid item xs={12}>
                <Content />
            </Grid>
        </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container style={{ alignItems: "center", marginBottom:'20px' }}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h4"  className={classes.BlogHeading} style={{fontWeight: '700'}}  >
                        Popular Resources
                    </Typography>
                </Grid>
        <Grid item xs={12}>
            <Grid container >
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
    [theme.breakpoints.up('sm')]: {
        // padding: theme.spacing(2),
        },
        margin: 'auto',
        maxWidth: '900px',
        boxShadow: 'none'
    },
    cover: {
        height: 100,
        boxShadow: "0px 20px 200px 100px black",
    },
    details : {
        [theme.breakpoints.up("sm")]: {
        paddingLeft: '30px'
        }
    }
    }));

    export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container  >
            <Grid item xs={5}  style={{margin: 'auto'}} >
            <Card>
                <CardMedia
                className={classes.cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
            />
            </Card>
            </Grid>
            <Grid item xs={7}  container className={classes.details}>
                <Grid item xs container direction="column" >
                <Grid item xs>
                    <Typography  variant="body2" color="primary" >
                    TENDING
                    </Typography>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}}>
                    Phone looks premium under the gradient light
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Paper>
        </div>
    );
}
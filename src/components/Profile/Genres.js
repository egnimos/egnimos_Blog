import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '25px',
        paddingTop: '50px',
        paddingRight: '0px',
        background: '#FB614A',
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    }));

    export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
        <Grid container>
            <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1" color="primary" style={{fontWeight: 'bold'}}>
                    ARNAB'S GENRES
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <Grid container direction="column" justify="flex-start" alignItems="flex-start"style={{ marginTop: '20px'}}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Fiction
                        </Typography>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Nonfiction
                        </Typography>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Historialfiction
                        </Typography>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Biography
                        </Typography>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Psychology
                        </Typography>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Science
                        </Typography>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Education
                        </Typography>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Art
                        </Typography>
                        <Typography gutterBottom variant="body2" color="primary" >
                            Journal
                        </Typography>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-end" >
                <Grid item>
                    <Typography gutterBottom variant="body2" color="primary" >
                        Journal
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="body2" color="primary" >
                        Journal
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="body2" color="primary" >
                        Journal
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '25px',
        paddingTop: '50px',
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        color: 'white'

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        margin: 'auto'
    },
    }));

    export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container style={{color: 'white'}}>
            {/* First Container */}
            {/* <Grid container>
                <Grid item xs={3}>
                    <Typography gutterBottom variant="h6"  style={{textAlign: 'center'}} >
                        Logo
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={3} direction="row" justify="flex-start" alignItems="center">
                        <Grid item > 
                            <Typography gutterBottom variant="h6"  >
                                Search
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="h6"  >
                                Contact
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="h6">
                                About
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
            {/* Second Container */}
            <Grid container spacing={2} style={{marginTop: '20px'}}>
                <Grid item xs={3} style={{marginTop: '5px'}}>
                    <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" className={classes.large} />
                </Grid>
                <Grid item xs={9} style={{color: 'white'}} >
                    <Grid container spacing={2} direction="column" justify="flex-start" alignItems="flex-start" style={{paddingRight : '50px'}} >
                        <Grid item > 
                            <Typography  variant="h5"  style={{fontWeight: 'bold',color: 'white'}} >
                                Prakash Thakur
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Grid container spacing={1} direction="row" justify="flex-start" alignItems="center">
                            <Grid item > 
                                <Typography gutterBottom variant="body2" >
                                    <TwitterIcon />
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography gutterBottom variant="body2"  >
                                    <FacebookIcon/>
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography gutterBottom variant="body2" >
                                    <InstagramIcon/>
                                </Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="body2"  style={{ textAlign: 'justify'}} >
                                There is one limitation with the negative margin we use to implement the spacing between items.
                                There is one limitation with the negative margin we use to implement the spacing between items.
                                There is one limitation with the negative margin wes
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="body2"   style={{ textAlign: 'justify'}}>
                                There is one limitation with the negative 
                                There is one limitation with the negativmargine margin we use to implement the spacing between items.
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="body2" style={{ textAlign: 'justify'}}>
                                There is one limitation with the negative margin we use to implement the spacing between items.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
}

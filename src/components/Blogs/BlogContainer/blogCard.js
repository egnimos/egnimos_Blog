import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // maxWidth: "70vw",
    // [theme.breakpoints.down("md")]: {
    // //   maxWidth: 200,
    // }
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '900px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '300px',
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://source.unsplash.com/random"
        title="Live from space album cover"
      />
      <div className={classes.details}  >
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="body2" >
                  ENTERPRISE
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Autodesk looks to future of 3D printing with Project Escher
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own business model disruption is only part of the story — and4
                </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

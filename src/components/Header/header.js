import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderRadius: "150px 50px 50px 150px",
    backgroundImage: `url("https://images.unsplash.com/photo-1474168442801-2342fbafe264?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1187&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "inherit",
    height: `calc(20vw )`,
  },
  cover: {
    width: `calc(20vw )`,
    height: `calc(20vw )`,
    borderRadius: "50%",
    border: "5px solid #fff",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Live from space album cover"
      />
    </Card>
  );
}

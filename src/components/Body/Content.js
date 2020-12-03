import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "30vw",
    [theme.breakpoints.down("md")]: {
      // maxWidth: 200,
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <Hidden smDown>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp man"
            subheader="September 14, 2016"
          />
        </Hidden>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          title="Paella dish"
        />
        <Hidden smDown>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
              <Typography variant="body2" color="textSecondary" component="p">
                72
              </Typography>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
              <Typography variant="body2" color="textSecondary" component="p">
                24
              </Typography>
            </IconButton>
          </CardActions>
          <CardContent>
            <Chip label="Killer" />
          </CardContent>
        </Hidden>
      </Card>
    </div>
  );
};

export default Content;

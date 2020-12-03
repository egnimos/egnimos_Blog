import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  title: {
    margin: theme.spacing(2, 0, 0),
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12} style={{ padding: "5px" }}>
        <Typography variant="h6" className={classes.title}>
          See more related Videos
          <Divider />
        </Typography>
        <List className={classes.root} component="nav">
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                style={{
                  borderRadius: "0",
                  maxWidth: "500px",
                  maxHeight: "500px",
                }}
                src="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Pay for killing my doggo!!"
              secondary="2153 views"
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                style={{
                  borderRadius: "0",
                  maxWidth: "500px",
                  maxHeight: "500px",
                }}
                src="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary="2153 views"
            />
          </ListItem>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                style={{
                  borderRadius: "0",
                  maxWidth: "500px",
                  maxHeight: "500px",
                }}
                src="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary="2153 views"
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                style={{
                  borderRadius: "0",
                  maxWidth: "500px",
                  maxHeight: "500px",
                }}
                src="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary="2153 views"
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                style={{
                  borderRadius: "0",
                  maxWidth: "500px",
                  maxHeight: "500px",
                }}
                src="https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary="2153 views"
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

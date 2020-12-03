import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Data from "./container";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 5px #ccc",
    border: "2px solid #ddd",
    borderRadius: "10px",
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Data />
    </div>
  );
}

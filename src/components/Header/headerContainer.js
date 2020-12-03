import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Typography from "@material-ui/core/Typography";
import CoverPhoto from "./header";
import { useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function CenteredGrid() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  function Verify() {
    return (
      <React.Fragment>
        <Chip size="large" icon={<VerifiedUserIcon />} label="Verified" />
      </React.Fragment>
    );
  }

  function Buttons() {
    return (
      <React.Fragment>
        <>
          <Chip
            size="large"
            style={{ marginRight: "30px" }}
            color="primary"
            icon={<PersonAddIcon />}
            label="Follow"
          />
          <Chip
            size="large"
            variant="outlined"
            color="primary"
            icon={<PersonAddIcon />}
            label="Add Friend"
          />
        </>
      </React.Fragment>
    );
  }

  // Kamlesh
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid xs={11} item>
        <Grid item xs={12} style={{ marginBottom: "30px" }}>
          <CoverPhoto />
        </Grid>
        <Grid item xs={12} container direction="row" alignItems="center">
          <Grid item xs={12}>
            <>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  justify: "center",
                  marginRight: "20px",
                }}
                component="span"
              >
                John Wick
              </Typography>
              {matches ? <Verify /> : <Buttons />}
            </>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            {matches ? <Buttons /> : <Verify />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

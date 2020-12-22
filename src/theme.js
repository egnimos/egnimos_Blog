import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { lightGreen, grey, orange } from "@material-ui/core/colors";

// Create a theme instance.
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
<<<<<<< HEAD
      main: '#0E2EA5',
      // main: '#d4bff9',
      // main: "#fff",
    },
    secondary: {
      main: "#2248C1",
=======
      main: "#5FCAAF",
      // main: "#fff",
    },
    secondary: {
      main: "#FB614A",
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
    },
    lightGreen: {
      main: lightGreen,
    },
    error : {
      main: orange.A400
    },
    grey: {
      main: grey.A200
    },
    background: {
      default: "#fff",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  myFont: {
    primary: "Dancing Script",
    secondary: "Brawler",
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "6rem",
        [breakpoints.down("md")]: {
          fontSize: "5rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "4rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "3rem",
        },
      },
      h2: {
        fontSize: "4rem",
        [breakpoints.down("md")]: {
          fontSize: "3.5rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "3rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "2rem",
        },
      },
      h3: {
        fontSize: "3rem",
        [breakpoints.down("md")]: {
          fontSize: "2.5rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "2.1rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "1.8rem",
        },
      },
      h4: {
        fontSize: "2.2rem",
        [breakpoints.down("md")]: {
          fontSize: "1.7rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1.4rem",
        },
      },
      h5: {
        fontSize: "1.5rem",
        // fontFamily: "Brawler",
        [breakpoints.down("md")]: {
          fontSize: "1.4rem",
        },
        [breakpoints.down("sm")]: {
<<<<<<< HEAD
          fontSize: "1.2rem",
        },
      },
      h6: {
        fontSize: "1.25rem",
        // fontFamily: "Brawler",
        [breakpoints.down("md")]: {
          fontSize: "1.15rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1rem",
=======
          fontSize: "1.2",
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
        },
      },
    },
  },
});

export default theme;

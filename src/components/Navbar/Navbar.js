import React from 'react';
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
<<<<<<< HEAD
import MenuItem from '@material-ui/core/MenuItem';
=======
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SignUp from './Modals/SignUpModal';
<<<<<<< HEAD
import SignIn from './Modals/SignInModal';

=======
import SignIn from './Modals/SignInModal'
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
<<<<<<< HEAD
    fontSize: '1rem',
    fontWeight: '500',
=======
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
<<<<<<< HEAD
    paddingTop: '30px',
    paddingBottom: '20px',
    boxShadow: 'none',
    color: 'black',
    background: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
=======
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  grow: {
    flexGrow: 1,
    textAlign: 'right'
  },
  sectionDesktop: {
    display: 'none',
<<<<<<< HEAD
    [theme.breakpoints.up('lg')]: {
=======
    [theme.breakpoints.up('md')]: {
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
<<<<<<< HEAD
    [theme.breakpoints.up('lg')]: {
=======
    [theme.breakpoints.up('md')]: {
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
      display: 'none',
    },
  },
  navAlign: {
<<<<<<< HEAD
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '0px',
      margin:'0px',
    },
  },
  navAlignItem: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0px !important',
      padding: '0px !important',
    },
  },
  mobItemAlign: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      margin:'0px',
=======
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      margin:'0px',
      flexDirection: 'column'
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
    },
  }
}));
function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
const drawer = (
          <div >
<<<<<<< HEAD
            <Grid container spacing={5} direction="row" className={classes.navAlign}  justify="space-evenly" alignItems="center">
              <Grid item className={classes.navAlignItem} style={{paddingLeft: '300px'}}>
                    <Grid container className={classes.mobItemAlign} direction="row" justify="space-between" spacing={2} alignItems="center">
                      <Grid item>
                        <Link  to="/" style={{textDecoration: 'none',color: 'inherit'}} >
                          Home
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link  to="/profile" style={{textDecoration: 'none',color: 'inherit'}} >
                          Profile
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link  to="/blogpost" style={{textDecoration: 'none',color: 'inherit'}} >
                          Blog Post
                        </Link>
                      </Grid>
                      <Grid item>
                          <Link  to="/customerservice" style={{textDecoration: 'none',color: 'inherit'}} >
                            Customer Services
                          </Link>
                      </Grid>
                    </Grid>
                </Grid>

                <Grid item style={{paddingLeft: 'auto'}} >
                    <Grid container  direction="row" justify="flex-end" spacing={2} alignItems="center">
                      <Grid item>
                        <Grid container className={classes.mobItemAlign}>
                          <Grid item>
                            <SignIn/>
                          </Grid>
                          <Grid item>
                            <SignIn/>
                          </Grid>
                          <Grid item>
                            <SignIn/>
                          </Grid>
                          <Grid item>
                            <SignUp/>
                          </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>


                {/* <Grid container direction="row" justify="space-between" spacing={3} alignItems="center">
                  <Grid item>
                    <Grid container direction="row" justify="space-between" spacing={2} alignItems="center">
                      <Grid item>
                        Articles
                      </Grid>
                      <Grid item>
                        Articles
                      </Grid>
                      <Grid item>
                        Articles
                      </Grid>
                      <Grid item>
                        Articles
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item >
                    <Grid container style={{marginLeft : 'auto'}}>
                      <Grid item>
                        <SignIn/>
                      </Grid>
                      <Grid item>
                        <SignIn/>
                      </Grid>
                      <Grid item>
                        <SignIn/>
                      </Grid>
                      <Grid item>
                        <SignUp/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid> 

              </Grid> */}
              
=======
            <Grid container spacing={3} direction="row" className={classes.navAlign} justify="flex-end" alignItems="center">
              <Grid item>
                <SignIn/>
              </Grid>
              <Grid item>
                <SignUp/>
              </Grid>
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
            </Grid>
          </div>
  );


return (
    <div className={classes.root}>
<<<<<<< HEAD
      <AppBar position="absolute" className={classes.appBar}>
=======
      <AppBar position="fixed" className={classes.appBar}>
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
<<<<<<< HEAD
          <Hidden mdDown >
=======
          <Hidden xsDown >
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
            <div className={classes.grow}>
              {drawer}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
<<<<<<< HEAD
        <Hidden mdUp implementation="css">
=======
        <Hidden smUp implementation="css">
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

<<<<<<< HEAD
export default ResponsiveDrawer;


// New Navbar 


// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   makeStyles,
//   Button,
//   IconButton,
//   Drawer,
//   Link,
//   MenuItem,
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import React, { useState, useEffect } from "react";
// import { Link as RouterLink } from "react-router-dom";

// const headersData = [
//   {
//     label: "Articles",
//     href: "/listings",
//   },
//   {
//     label: "Events",
//     href: "/mentors",
//   },
//   {
//     label: "Reports",
//     href: "/account",
//   },
//   {
//     label: "Customer Service",
//     href: "/login",
//   },
//   {
//     label: "Search Bar",
//     href: "/logout",
//   },
//   {
//     label: "Sign In",
//     href: "/logout",
//   },
//   {
//     label: "Sign Up",
//     href: "/logout",
//   },
// ];

// const useStyles = makeStyles(() => ({
//   header: {
//     // backgroundColor: "lightblue",
//     backgroundColor: "#fff",
//     color: 'grey',
//     paddingRight: "79px",
//     paddingLeft: "118px",
//     paddingTop: '30px',
//     paddingBottom: '30px',
//     marginBottom: '50px',
//     position: 'absolute',
//     boxShadow: 'none',
//     "@media (max-width: 900px)": {
//       paddingLeft: 0,
//       paddingTop: '10px',
//     },
//   },
//   logo: {
//     fontFamily: "Work Sans, sans-serif",
//     fontWeight: 600,
//     color: "blue",
//     textAlign: "left",
//   },
//   menuButton: {
//     fontFamily: "Open Sans, sans-serif",
//     fontWeight: 700,
//     fontSize: '12px',
//     size: "18px",
//     marginLeft: "38px",
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   drawerContainer: {
//     padding: "20px 30px",
//   },
// }));

// export default function Header() {
//   const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

//   const [state, setState] = useState({
//     mobileView: false,
//     drawerOpen: false,
//   });

//   const { mobileView, drawerOpen } = state;

//   useEffect(() => {
//     const setResponsiveness = () => {
//       return window.innerWidth < 900
//         ? setState((prevState) => ({ ...prevState, mobileView: true }))
//         : setState((prevState) => ({ ...prevState, mobileView: false }));
//     };

//     setResponsiveness();

//     window.addEventListener("resize", () => setResponsiveness());
//   }, []);

//   const displayDesktop = () => {
//     return (
//       <Toolbar className={toolbar}>
//         {femmecubatorLogo}
//         <div>
//           {getMenuButtons()}
//         </div>
//       </Toolbar>
//     );
//   };

//   const displayMobile = () => {
//     const handleDrawerOpen = () =>
//       setState((prevState) => ({ ...prevState, drawerOpen: true }));
//     const handleDrawerClose = () =>
//       setState((prevState) => ({ ...prevState, drawerOpen: false }));

//     return (
//       <Toolbar>
//         <IconButton
//           {...{
//             edge: "start",
//             color: "inherit",
//             "aria-label": "menu",
//             "aria-haspopup": "true",
//             onClick: handleDrawerOpen,
//           }}
//         >
//           <MenuIcon />
//         </IconButton>

//         <Drawer
//           {...{
//             anchor: "left",
//             open: drawerOpen,
//             onClose: handleDrawerClose,
//           }}
//         >
//           <div className={drawerContainer}>{getDrawerChoices()}</div>
//         </Drawer>

//         <div>{femmecubatorLogo}</div>
//       </Toolbar>
//     );
//   };

//   const getDrawerChoices = () => {
//     return headersData.map(({ label, href }) => {
//       return (
//         <Link
//           {...{
//             component: RouterLink,
//             to: href,
//             color: "inherit",
//             style: { textDecoration: "none" },
//             key: label,
//           }}
//         >
//           <MenuItem>{label}</MenuItem>
//         </Link>
//       );
//     });
//   };

//   const femmecubatorLogo = (
//     <Typography variant="h6" component="h1" className={logo}>
//       Femmecubator
//     </Typography>
//   );

//   const getMenuButtons = () => {
//     return headersData.map(({ label, href }) => {
//       return (
//         <Button
//           {...{
//             key: label,
//             color: "inherit",
//             to: href,
//             component: RouterLink,
//             className: menuButton,
//           }}
//         >
//           {label}
//         </Button>
//       );
//     });
//   };

//   return (
//     <header>
//       <AppBar className={header}>
//         {mobileView ? displayMobile() : displayDesktop()}
//       </AppBar>
//     </header>
//   );
// }
=======
export default ResponsiveDrawer;
>>>>>>> 4b5de2cfeda88d075cd88bd028e6d7eaa4c62181

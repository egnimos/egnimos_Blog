// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuIcon from '@material-ui/icons/Menu';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   HeaderElement: {
//       marginLeft: theme.spacing(5),
//       marginRight: theme.spacing(5),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="fixed" style={{boxShadow: "0 5px 20px grey"}} >
//         <Toolbar className={classes.HeaderElement} >
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             EgniBlogger
//           </Typography>
//           <IconButton
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 color="inherit"
//               >
//                 <AccountCircle />
//            </IconButton>
//           <Button color="inherit">Logout</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }



// 2nd Menu


// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import Hidden from '@material-ui/core/Hidden';
// import Divider from '@material-ui/core/Divider';
// import MenuIcon from '@material-ui/icons/Menu';
// // import { mailFolderListItems, otherMailFolderListItems } from './tileData';

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     height: 430,
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//   },
//   appBar: {
//     position: 'absolute',
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   navIconHide: {
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//     [theme.breakpoints.up('md')]: {
//       position: 'relative',
//     },
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
// });

// class ResponsiveDrawer extends React.Component {
//   state = {
//     mobileOpen: false,
//   };

//   handleDrawerToggle = () => {
//     this.setState(state => ({ mobileOpen: !state.mobileOpen }));
//   };

//   render() {
//     const { classes, theme } = this.props;

//     const drawer = (
//       <div>
//         <div className={classes.toolbar} />
//         <Divider />
//         <List>Prakash</List>
//         <Divider />
//         <List>kamlesh</List>
//       </div>
//     );

//     return (
//       <div className={classes.root}>
//         <AppBar className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerToggle}
//               className={classes.navIconHide}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="title" color="inherit" noWrap>
//               Responsive drawer
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Hidden mdUp>
//           <Drawer
//             variant="temporary"
//             anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//             open={this.state.mobileOpen}
//             onClose={this.handleDrawerToggle}
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <Hidden smDown implementation="css">
//           <Drawer
//             variant="permanent"
//             open
//             classes={{
//               paper: classes.drawerPaper,
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Hidden>
//         <main className={classes.content}>
//           <div className={classes.toolbar} />
//           <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
//         </main>
//       </div>
//     );
//   }
// }

// ResponsiveDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);


// 3rd menu

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SignUp from './SignUpModal';
import SignIn from './SignInModal'
// import VisibleItemList from '../containers/VisibleItemList'


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
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
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navAlign: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      margin:'0px',
      flexDirection: 'column'
    },
  }
}));
function ResponsiveDrawer() {
  const dummyCategories = ['Hokusai', 'Hiroshige', 'Utamaro', 'Kuniyoshi', 'Yoshitoshi']
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
const drawer = (
          <div >
            <Grid container spacing={3} direction="row" className={classes.navAlign} justify="flex-end" alignItems="center">
              <Grid item>
                <SignIn/>
              </Grid>
              <Grid item>
                <SignUp/>
              </Grid>
            </Grid>
          </div> 
          // <Button color="inherit"><Modal/></Button>
          // <Button color="inherit">Login</Button>
          // <Button color="inherit">KAMLESH</Button>
    // <div>
    //   <List>
    //     {dummyCategories.map((text, index) => (
    //       <ListItem button key={text}>
    //         <ListItemText primary={text} />
    //       </ListItem>
    //     ))}
    //   </List>
    // </div>
  );


return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" className={classes.appBar}>
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
          <Hidden xsDown >
            <div className={classes.grow}>
              {drawer}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
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
        {/* <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden> */}
      </nav>
      {/* <div className={classes.content}>
        <div className={classes.toolbar} />
        Prakash
        <VisibleItemList /> Main Item
      </div> */}
    </div>
  );
}

export default ResponsiveDrawer;
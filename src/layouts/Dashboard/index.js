import React, { Fragment } from 'react'


import { NavLink } from 'react-router-dom'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import SideBar from './listItems';
import Structure from '../../pages/chapters/structure'
import Footer from '../../components/LayoutComponents/Footer'

import Libp2pLogo from '../../assets/libp2p.png'
import IpfsLogo from '../../assets/ipfs-logo.png'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: '#7A67EE',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    height: '100%',
    position: 'fixed',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    marginLeft: '80px',
    padding: '5%'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  let context = {};

  const setContext = () => {
    let i = 0;
    const contextArr = ["project", "section", "topic", "subtopic"]
    window.location.pathname.split('/').map(path => {
      if (path != "") {
        context[contextArr[i]] = path
        i += 1;
      }
    })
  }
  setContext()

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.replace(/_/g, ' ').slice(1);
  }

  const getNavPath = () => {
    let jumpPath = "/"
    return window.location.pathname.split('/').map((path, index) => {
      if (index > 0) {
        if (path != "") {
          jumpPath += path + "/"
          return <Fragment key={index}>{" > "} <NavLink onClick={() => { this.forceUpdate() }} className={classes.link} to={jumpPath}>{capitalizeFirstLetter(path)}</NavLink></Fragment>
        }
        return
      }
      return <NavLink onClick={() => { this.forceUpdate() }} key={index} to="/" className={classes.link}>Home</NavLink>
    })
  }

  let navbar
  const updateNavBar = () => {
    navbar = getNavPath()
  }

  window.updateNavBar = updateNavBar

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {getNavPath()}
          </Typography>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <NavLink className={classes.link} to={`/${context.project}`}>
            <img src={`/assets/${context.project}.png`} height="50px" />
          </NavLink>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <SideBar {...props} sidebar={Structure[context.project]} />
      </Drawer>
      <div className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}>
        {props.children}
      </div>
    </div>
  )
}

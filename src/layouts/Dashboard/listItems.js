import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StepIcon from '@material-ui/icons/BookmarkBorder';
import QuestionIcon from '@material-ui/icons/HelpOutline';
import ConceptIcon from '@material-ui/icons/AssignmentOutlined';
import TutorialIcon from '@material-ui/icons/Code';
import KitIcon from '@material-ui/icons/WidgetsOutlined'
import StarterKitIcon from '@material-ui/icons/StoreOutlined';
import AppsIcon from '@material-ui/icons/AppsOutlined';
import OverviewIcon from '@material-ui/icons/FormatListBulletedOutlined';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    textDecoration: 'none',
    color: '#000000de'
  },
  listItemIcon: {
    maxWidth: '36px'
  }
}));

export default function NestedList(props) {
  const classes = useStyles();
  const [menuState, ToggleMenu] = React.useState({
    'introductions': false,
    'concepts': false,
    'tutorials': false,
    'starterkits': false,
    'apps': false
  });

  function handleClick(menu) {
    let newState = { ...menuState }
    newState[menu] = !newState[menu]
    ToggleMenu(newState)
  }

  const { match, location, sidebar } = props

  const getIntroductionsList = () => {
    return sidebar.introductions.map((intro, index) => {
      return (
        <NavLink key={index} to={intro.link} className={classes.link}>
          <ListItem button className={classes.nested}>
            <ListItemIcon className={classes.listItemIcon}>
              <QuestionIcon />
            </ListItemIcon>
            <ListItemText secondary={intro.text} />
          </ListItem>
        </NavLink>
      )
    })
  }

  const getConceptsList = () => {
    return sidebar.concepts.map((concept, index) => {
      return (
        <NavLink key={index} to={concept.link} className={classes.link}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <QuestionIcon />
            </ListItemIcon>
            <ListItemText secondary={concept.text} />
          </ListItem>
        </NavLink>
      )
    })
  }

  const getTutorialsList = () => {
    return sidebar.tutorials.map((tutorial, index) => {
      return (
        <NavLink key={index} className={classes.link} to={tutorial.link}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StepIcon />
            </ListItemIcon>
            <ListItemText secondary={tutorial.text} />
          </ListItem>
        </NavLink>
      )
    })
  }

  const getKitsList = () => {
    return sidebar.starter_kits.map((kit, index) => {
      return (
        <NavLink key={index} to={kit.link} className={classes.link}>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <KitIcon />
            </ListItemIcon>
            <ListItemText secondary={kit.text} />
          </ListItem>
        </NavLink>
      )
    })
  }


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      /* subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      } */
      className={classes.root}
    >
      <NavLink className={classes.link} to={sidebar.overview.link}>
        <ListItem button>
          <ListItemIcon>
            <OverviewIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>
      </NavLink>

      <ListItem button onClick={() => handleClick('introductions')}>
        <ListItemIcon>
          <ConceptIcon />
        </ListItemIcon>
        <ListItemText primary="Introduction" />
        {menuState.introductions ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={menuState.introductions} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {getIntroductionsList()}
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick('concepts')}>
        <ListItemIcon>
          <ConceptIcon />
        </ListItemIcon>
        <ListItemText primary="Concepts" />
        {menuState.concepts ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={menuState.concepts} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {getConceptsList()}
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick('tutorials')}>
        <ListItemIcon>
          <TutorialIcon />
        </ListItemIcon>
        <ListItemText primary="Tutorials" />
        {menuState.tutorials ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={menuState.tutorials} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {getTutorialsList()}
        </List>
      </Collapse>


      <ListItem button onClick={() => handleClick('starterkits')}>
        <ListItemIcon>
          <StarterKitIcon />
        </ListItemIcon>
        <ListItemText primary="Starter Kits" />
        {menuState.starterkits ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={menuState.starterkits} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {getKitsList()}
        </List>
      </Collapse>

      <NavLink to={sidebar.app_store.link} className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="App Store" />
        </ListItem>
      </NavLink>
    </List>
  );
}

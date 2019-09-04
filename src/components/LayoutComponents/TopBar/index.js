import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
//import Twitter from '@material-ui/icons/Twitter';
import Button from '../Button'
import SearchIcon from '@material-ui/icons/Search';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import SimpleAsWaterLogo from '../../../assets/appbarlogo1.png'
import { NavLink } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            alignItems: 'center'
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#85929E',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 240,
            '&:focus': {
                width: 300,
            },
        },
    },
}));

export default function SearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="#fff">
                <Toolbar>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <NavLink to="/">
                        <Typography className={classes.title} variant="h6" noWrap>
                            <img src={SimpleAsWaterLogo} style={{ minWidth: "200px" }} width="20%" />
                        </Typography>
                    </NavLink>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <EmailIcon />
                        </div>
                        <InputBase
                            placeholder="Get free courses"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <Button color="#fff" text="Get" variant="contained" />
                    {/* <a href="https://twitter.com/simpleaswater_" target="_blank">
                        <IconButton
                            edge="end"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <span style={{ fontSize: "2rem" }}>
                                <span style={{ color: "Mediumslateblue" }}>
                                    <i class="fab fa-twitter"></i>
                                </span>
                            </span>
                        </IconButton>
                    </a> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

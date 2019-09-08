import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        position: 'relative'
    },
    chip: {
        margin: theme.spacing(1),
        position: 'absolute',
        right: 0
    },
    link: {
        textDecoration: 'none'
    }
}))

export default function Link(props) {
    //console.log(props)
    const { link, children } = props
    const classes = useStyles();

    if (!link) {
        return props.children
    }
    else if (link.substr(0, 1) == "/") {
        return <NavLink to={link} className={classes.link} onClick={() => { this.forceUpdate() }}>{children}</NavLink>
    }
    else {
        return <a target="_blank" href={link} className={classes.link} >{children}</a>
    }
}

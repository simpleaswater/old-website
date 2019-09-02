import React from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '../Button'
import { StylesContext } from '@material-ui/styles/StylesProvider';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '300px',
        height: '300px',
        textAlign: 'center',
    },
}));

export default function PaperSheet(props) {

    const { heading, description, className, buttonClass, paperColor, textColor, buttonText, buttonColor, buttonLink } = props

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root + " " + className} style={{ backgroundColor: paperColor, color: textColor, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <span>
                    <Typography variant="h5" component="h3">
                        {heading}
                    </Typography>
                    <br />
                    <Typography component="p" style={{ fontSize: "17px" }}>
                        {description}
                    </Typography>
                    <br />
                </span>
                <NavLink to={buttonLink} style={{ textDecoration: 'none' }}>
                    <Button color={buttonColor} className={buttonClass} text={buttonText} variant="outlined" />
                </NavLink>
            </Paper>
        </div>
    );
}

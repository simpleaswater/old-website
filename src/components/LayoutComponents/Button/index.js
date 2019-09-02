import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = (color) => makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        color: color,
    },
}));

export default function Buttons(props) {

    const { color, text, size, variant, className, buttonColor } = props;

    const classes = useStyles(color)();

    return (
        <Fragment>
            <Button color={buttonColor || "secondary"} variant={variant} size={size} className={classes.button + "  " + className}>
                <b><font color={color}>{text}</font></b>
            </Button>
        </Fragment>
    );
}

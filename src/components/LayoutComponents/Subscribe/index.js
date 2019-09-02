import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
        fontSize: '18px'
    },
    button: {
        fontSize: '14px'
    }
}));

export default function Subscribe(props) {

    const { placeholderText } = props

    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Grid container spacing={2} justify="center">
            <Grid key={0} item>
                <center>
                    <Input
                        id="input-with-icon-adornment"
                        className={classes.textField}
                        placeholder={placeholderText || "Get 5 handpicked resources Weekly"}
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        }
                    />
                </center>
            </Grid>
            <Grid key={1} item>
                <Button variant="contained" color="secondary" className={classes.button}>Give me free Access</Button>
            </Grid>
        </Grid>
    )


}
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

import axios from 'axios'

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

    var { placeholderText, buttonText } = props

    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: ''
    });

    let buttonColorClass = "secondary"

    const sendEmail = () => {
        axios({
            method: 'get',
            url: `https://simpleaswater.com:8081/email?to=${values.email}`,
        })
            .then(response => {
                console.log(response.data)
                buttonText = "Check your Mail :)"
            })
            .catch(err => {
                console.log(err)
                buttonText = "Please Try Again"
            })

    }

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
                <Button variant="contained" color={buttonColorClass} onClick={sendEmail} className={classes.button}>{buttonText || 'Give me free Access'}</Button>
            </Grid>
        </Grid>
    )


}
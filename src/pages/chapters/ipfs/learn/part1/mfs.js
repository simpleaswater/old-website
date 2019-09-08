import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { NavLink } from 'react-router-dom'

import uploadToIPFS from '../../../../../utils/uploadToIPFS'
import { Buffer } from 'multihashing-async';

import LocationAddressingImg from '../../../../../assets/cid01.png'
import ContentAddressingImg from '../../../../../assets/cid02.png'

const sha1 = require('js-sha1');
const sha256 = require('js-sha256');

const useStyles = makeStyles(theme => ({
    code: {
        backgroundColor: '#F2F3F4',
        fontSize: '0.875rem',
        fontFamily: "\"Roboto Mono\", \"monospace\"",
    },
    link: {
        color: "#0000EE",
        textDecoration: 'none'
    },
    note: {
        borderLeft: "6px solid #3f51b5",
        backgroundColor: "#ddffff"
    },
    textField: {
        width: "100%"
    },
    button: {
        margin: theme.spacing(2),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    example: {
        padding: '5%',
        border: '2px solid #3f51b5',
        borderRadius: '8px'
    },
    img: {
        width: '60%'
    }
}))

export default function Mfs() {
    const classes = useStyles();

    const [values, setValues] = React.useState({ cid: '' });

    /* const handleClick = async () => {
        let cid = await ipfs.addToIPFS(document.getElementById("outlined-cid").value);
        console.log(cid[0].hash)
        setValues({ ...values, 'cid': cid[0].hash })
    }; */

    const handleFileUpload = event => {
        console.log(event.target.files[0])
        uploadToIPFS(event.target.files[0])
    }

    useEffect(() => {
        console.log("what is ipfs?")
        window.scrollTo(0, 0)
    }, []);

    return (
        <Grid container spacing={3}>

            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>Mutable File System (MFS)</b>
                </Typography>
            </Grid>

        </Grid>
    )
}
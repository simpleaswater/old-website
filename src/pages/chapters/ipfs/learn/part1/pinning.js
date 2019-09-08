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

import UnPinnedImg from '../../../../../assets/pinning01.png'
import PinnedImg from '../../../../../assets/pinning02.png'

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

export default function Pinning() {
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
                    <b>Pinning</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    In the <NavLink className={classes.link} to="/ipfs/learn/cid">content addressing</NavLink> section, we learned that different IPFS peers store the data(for example, wiki web pages) that they can share with other IPFS peers too.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    But as you can imagine there is a limit on how much your device can store. Let's say an IPFS peer stores 10 GB of data. This limit can be changed if you want. If the size of the data stored on the IPFS peer exceeds the set limit, the <b>garbage collector</b> deletes the data that is least requested(un-popular data) by the peers in the network.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" item>
                <img src={UnPinnedImg} className={classes.img} />
                <br />
                <Typography variant="body2">
                    <i>Garbage Collector deletes Un-Pinned Data</i>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    But 10 GB is not enough to store all the Wikipedia pages. So, we only store data that is important to us on our IPFS peers. Storing data selectively is called <b>pinning</b> the data(CID).
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    When you "pin" an image or a movie on an IPFS peer, and even if no one is requesting for that image or movie, it will not be deleted by the garbage collector after the storage capacity is exceeded.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" item>
                <img src={PinnedImg} className={classes.img} />
                <br />
                <Typography variant="body2">
                    <i>Garbage Collector does NOT delete Pinned Data</i>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        In other words
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS nodes treat the data they store like a cache, meaning that there is no guarantee that the data will continue to be stored. Pinning a CID tells an IPFS server that the data is important and mustn't be thrown away.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    You should pin any content you consider important, to ensure that content is retained long-term. Since data important to someone else may not be important to you, pinning lets you have control over the disk space and data retention you need.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        Pinning Services
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    To ensure that your important data is retained, you may want to use a pinning service. Such a service normally trades money for the service of guaranteeing they'll keep your data "pinned". Some cases where this might be important to you:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            You don't have a lot of disk space, but you want to ensure some data sticks around.
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            Your computer is a laptop, phone, or tablet that will have intermittent connectivity to the network, but you want to be able to access your data on IPFS from anywhere at any time, even when the device you added it from is offline.
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            You want a backup that ensures your data is always available from another computer on the network in case you accidentally delete or garbage-collect on your own computer.
                        </Typography>
                    </li>
                </ul>
            </Grid>


        </Grid>
    )
}
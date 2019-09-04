import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    code: {
        backgroundColor: '#F2F3F4',
        fontSize: '0.875rem',
        fontFamily: "\"Roboto Mono\", \"monospace\"",
    },
    link: {
        color: "#0000EE"
    },
    note: {
        borderLeft: "6px solid #3f51b5",
        backgroundColor: "#ddffff"
    }
})

export default function Pinning() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>Pinning</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS nodes treat the data they store like a cache, meaning that there is no guarantee that the data will continue to be stored. Pinning a CID tells an IPFS server that the data is important and mustn’t be thrown away.
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
                        Context
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Your IPFS node can store data based on different kinds of user events. For instance, you can add a file with <span className={classes.code}> ipfs add ...</span>. It will also store data you request, such as by loading a web page through the gateway (<span className={classes.code}>http://localhost:8080/ipfs/QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco</span>) or with <span className={classes.code}>ipfs cat ...</span>. Your node will consult with other IPFS peers to find these requested data, and will store the results in the local cache. ipfs add will automatically pin the content, but other IPFS commands do not include automatic pinning.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    When garbage collection is triggered on a node, any pinned content is automatically exempt from deletion. Non-pinned data may be deleted; if you request it again later, the data can be retrieved from another node.
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
                    To ensure that your important data is retained, you may want to use a pinning service. Such a service normally trades money for the service of guaranteeing they’ll keep your data pinned. Some cases where this might be important to you:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            You don’t have a lot of disk space, but you want to ensure some data sticks around.
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
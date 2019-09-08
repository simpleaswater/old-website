import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

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
    button: {
        margin: theme.spacing(2),
    },
}))

export default function How_ipfs_works() {
    const classes = useStyles();

    useEffect(() => {
        console.log("what is ipfs?")
        window.scrollTo(0, 0)
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>How IPFS Works?</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    There are <b>three</b> important things to understand about IPFS.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        1. Content addressing and linked data
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    This is how content is identified(addressed) in the IPFS ecosystem.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <b>
                        Everything else in the IPFS ecosystem builds on top of this core concept: linked, addressable content is the fundamental connecting element that makes the rest work.
                </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    In this section, we will cover:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            What are Hashes & What role they play in distributed systems?
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            Content-Addressing and Content-Identifiers (CIDs)
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            InterPlanetary Naming System (IPNS)
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            DNSLink
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            Pinning
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            Mutable File System (MFS)
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            UnixFS
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        2. IPFS turns files into DAGs (IPLD Overview)
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Now, when we know how to identify(address) content on IPFS, here we will learn how to link these different contents. For linking different types of content a separate project named InterPlanetary Linked Data (IPLD) was started. On the ground level, IPLD uses DAGs to do its magic. <br />In this section, we will cover:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            What are DAGs?
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            What is IPLD and Why do we need it?
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        3. The DHT (Libp2p Overview)
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Now as we know how content is addressed and linked with each other, let's see how different peers in the network can communicate and discover each other and share content over the network. For managing the peer-to-peer communication over a distributed network like IPFS, a separate project was started with the name Libp2p. In this section, we will learn:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            What is DHT?
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            What is Bitswap?
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            What is Libp2p and Why do we need it?
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} justify="center" align="center" item>
                <NavLink className={classes.link} to="/ipfs/learn/why_ipfs">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Previous
                </Button>
                </NavLink>
                <NavLink className={classes.link} to="/ipfs/learn/hashes">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Next
                </Button>
                </NavLink>
            </Grid>

        </Grid>
    )
}
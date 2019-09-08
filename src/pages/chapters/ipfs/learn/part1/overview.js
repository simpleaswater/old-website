import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    link: {
        color: "#0000EE",
        textDecoration: 'none'
    },
})

export default function Index() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography align='center' variant='h4'><b>Overview</b></Typography>
            </Grid>
            <Grid key={1} xs={12} item>
                <Typography variant='body1'>Welcome to the IPFS Guide! Whether you’re just learning how to build peer-to-peer systems with ipfs, want to dive into peer-to-peer concepts and tutorials, or are looking for ready-to-use examples, this is the place to start.</Typography>
            </Grid>
            <Grid key={2} xs={12} item>
                <Typography variant='h5'>
                    <b>
                        Learn
                    </b>
                </Typography>
            </Grid>

            <Grid key={2} xs={12} item>
                <Typography variant='body1'>
                    Learn <b>Why do we need IPFS</b>, <b>What is it</b> and <b>How it works</b>. We will go through the different <b>concepts involved in working of IPFS</b>.
                </Typography>
            </Grid>

            <Grid key={3} xs={12} item>
                <ul>
                    <li>
                        <Typography variant='h6'>
                            Introduction
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/why_ipfs">Why IPFS?</NavLink>
                                </Typography>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Typography variant='h6'>
                            Content addressing and Linked data
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/hashes">Hashes and Hash Functions</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/cid">Content addressing and Content Indentifier</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/ipns">InterPlanetary Naming System (IPNS)</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/pinning">Pinning</NavLink>
                                </Typography>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Typography variant='h6'>
                            Directed Acyclic Graphs (DAGs) and InterPlanetary Linked Data (IPLD)
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/hashes">InterPlanetary Linked Data</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/cid">Directed Acyclic Graphs (DAGs)</NavLink>
                                </Typography>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Typography variant='h6'>
                            Distributed Hash Table (DHT) and Libp2p
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/hashes">Libp2p</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/cid">Distributed Hash Table (DHT)</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/cid">Bitswap</NavLink>
                                </Typography>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Typography variant='h6'>
                            Miscellaneous
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/mfs">Mutable File System (MFS)</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/unixfs">UnixFS</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/learn/dnslink">DNSLink</NavLink>
                                </Typography>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Grid>


            <Grid key={2} xs={12} item>
                <Typography variant='h5'>
                    <b>
                        Getting Started
                    </b>
                </Typography>
            </Grid>

            <Grid key={2} xs={12} item>
                <Typography variant='body1'>
                    If you are looking for a getting started on IPFS, this is the place to start.
                </Typography>
            </Grid>

            <Grid key={2} xs={12} item>
                <ul>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/install">Install IPFS</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/start">Starting IPFS peer and connect with other peers</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/transfer_file">Transfering a file</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/replicate_large_datasets">Replicating Large Datasets</NavLink>
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={2} xs={12} item>
                <Typography variant='h5'>
                    <b>
                        Build using IPFS
                    </b>
                </Typography>
            </Grid>

            <Grid key={2} xs={12} item>
                <Typography variant='body1'>
                    Get hands-on experience by working with IPFS via interactive tutorials.
                </Typography>
            </Grid>

            <Grid key={2} xs={12} item>
                <ul>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/tutorials/hosting_website_on_ipfs">Hosting a website on IPFS</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/learn/cid">Building Decentralized Youtube on IPFS</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/learn/cid">Building an Online Publishing Platform on IPLD</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/learn/cid">Building a chat application using Libp2p</NavLink>
                        </Typography>
                    </li>
                </ul>
            </Grid>
        </Grid>
    )
}

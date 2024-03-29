import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    link: {
        color: "#0000EE",
        textDecoration: 'none'
    },
    button: {
        //margin: theme.spacing(2),
    },
}))

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
                                    <NavLink className={classes.link} to="/ipfs/introduction/why_ipfs">Why IPFS?</NavLink>
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
                                    <NavLink className={classes.link} to="/ipfs/concepts/hashes">Hashes and Hash Functions</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/cid">Content addressing and Content Indentifier</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/ipns">InterPlanetary Naming System (IPNS)</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/pinning">Pinning</NavLink>
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
                                    <NavLink className={classes.link} to="/ipfs/concepts/ipld">InterPlanetary Linked Data</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/dags">Directed Acyclic Graphs (DAGs)</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/merkle-dag">Merkle-DAGs</NavLink>
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
                                    <NavLink className={classes.link} to="/ipfs/concepts/libp2p">Libp2p</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/dht">Distributed Hash Table (DHT)</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/bitswap">Bitswap</NavLink>
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
                                    <NavLink className={classes.link} to="/ipfs/concepts/mfs">Mutable File System (MFS)</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/unixfs">UnixFS</NavLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='body1'>
                                    <NavLink className={classes.link} to="/ipfs/concepts/dnslink">DNSLink</NavLink>
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
                            <NavLink className={classes.link} to="/ipfs/getting_started/install">Install IPFS</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/getting_started/using_ipfs">Starting using IPFS and connect with other peers</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/getting_started/transfer_files">Transferring a file</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/getting_started/replicate_large_dataset">Replicating Large Datasets</NavLink>
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={2} xs={12} item>
                <Typography variant='h5'>
                    <b>
                        Tutorials
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
                            <NavLink className={classes.link} to="/ipfs/tutorials/hosting_website_on_ipfs_ipns_dnslink">Hosting a website on IPFS using IPNS and DNSLink</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/tutorials/youtube_on_ipfs">Building Decentralized Youtube on IPFS</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/tutorials/online_publishing_using_ipld">Building an Online Publishing Platform on IPLD</NavLink>
                        </Typography>
                    </li>
                    <li>
                        <Typography variant='body1'>
                            <NavLink className={classes.link} to="/ipfs/tutorials/chat_app_libp2p">Building a chat application using Libp2p</NavLink>
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={2} xs={12} item>
                <Typography variant='h5'>
                    <b>
                        App Store
                    </b>
                </Typography>
            </Grid>

            <Grid key={2} xs={12} item>
                <Typography variant='body1'>
                    Explore apps, tools and projects built by the IPFS Community.
                </Typography>
            </Grid>

            <Grid key={2} xs={12} item>
                <a className={classes.link} target="_blank" href="https://awesome.ipfs.io/apps/">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Explore Apps >
                    </Button>
                </a>
            </Grid>
        </Grid>
    )
}

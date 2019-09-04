import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    link: {
        color: "#0000EE"
    }
})

export default function Index() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography align='center' variant='h3'>Overview</Typography>
            </Grid>
            <Grid key={1} xs={12} item>
                <Typography variant='body1'>Welcome to the IPFS Guide! Whether you’re just learning how to build peer-to-peer systems with ipfs, want to dive into peer-to-peer concepts and tutorials, or are looking for ready-to-use examples, this is the place to start.</Typography>
            </Grid>
            <Grid key={2} xs={12} item>
                <Typography variant='h4'>Introduction</Typography>
            </Grid>
            <Grid key={3} xs={12} item>
                <Typography variant='body1'>Head over to <NavLink className={classes.link} to="/ipfs/introduction/what_is_ipfs">What is IPFS?</NavLink> for an introduction to the basics of ipfs and an <NavLink className={classes.link} to="/ipfs/introduction/how_ipfs_works">overview of the problems it addresses</NavLink>.</Typography>
            </Grid>
            <Grid key={4} xs={12} item>
                <Typography variant='h4'>Concepts</Typography>
            </Grid>
            <Grid key={5} xs={12} item>
                <Typography variant='body1'>Understand the underlying concepts of IPFS like <NavLink className={classes.link} to="/ipfs/concepts/hashes">Hashes</NavLink>, <NavLink className={classes.link} to="/ipfs/concepts/merkle-dag">Merkle-DAGS</NavLink>, <NavLink className={classes.link} to="/ipfs/concepts/ipns">IPNS</NavLink> via <b>interactive tutorials</b>.</Typography>
            </Grid>
            <Grid key={6} xs={12} item>
                <Typography variant='h4'>Tutorials</Typography>
            </Grid>
            <Grid key={7} xs={12} item>
                <Typography variant='body1'>If you want to dive in, check out our collection of tutorials, which will help guide you through your explorations of IPFS.</Typography>
            </Grid>
            <Grid key={8} xs={12} item>
                <Typography variant='h4'>Starter Kits</Typography>
            </Grid>
            <Grid key={9} xs={12} item>
                <Typography variant='body1'>Looking for ready-to-use examples? <br />If you want to get a feel for what’s possible with ipfs, or just want to see some idiomatic usage, check out the examples. Each ipfs implementation maintains a set of working example projects that can illustrate key concepts and use cases.</Typography>
            </Grid>
            <Grid key={10} xs={12} item>
                <Typography variant='h4'>App Store</Typography>
            </Grid>
            <Grid key={11} xs={12} item>
                <Typography variant='body1'>Browse through the apps, tools and projects built by the IPFS community.</Typography>
            </Grid>
        </Grid>
    )
}

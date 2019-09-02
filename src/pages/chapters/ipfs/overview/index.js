import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default class index extends Component {
    render() {
        return (
            <Grid container spacing={3}><Grid key={0} xs={12} item><Typography align='center' variant='h3'>Introduction</Typography></Grid><Grid key={1} xs={12} item><Typography variant='p'>Welcome to the ipfs documentation portal! Whether you’re just learning how to build peer-to-peer systems with ipfs, want to dive into peer-to-peer concepts and solutions, or are looking for ready-to-use examples, this is the place to start.</Typography></Grid><Grid key={2} xs={12} item><Typography variant='h4'>Overview</Typography></Grid><Grid key={3} xs={12} item><Typography variant='p'>Head over to What is ipfs? for an introduction to the basics of ipfs and an overview of the problems it addresses.</Typography></Grid><Grid key={4} xs={12} item><Typography variant='h4'>Tutorials</Typography></Grid><Grid key={5} xs={12} item><Typography variant='p'>If you want to dive in, check out our collection of tutorials, which will help guide you through your explorations of libp2p.</Typography></Grid><Grid key={6} xs={12} item><Typography variant='h4'>Starter Kits</Typography></Grid><Grid key={7} xs={12} item><Typography variant='p'>Looking for ready-to-use examples? <br />If you want to get a feel for what’s possible with libp2p, or just want to see some idiomatic usage, check out the examples. Each libp2p implementation maintains a set of working example projects that can illustrate key concepts and use cases.</Typography></Grid></Grid>
        )
    }
}

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

export default function What_is_ipfs() {
    const classes = useStyles();

    useEffect(() => {
        console.log("what is ipfs?")
        window.scrollTo(0, 0)
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4"><b>Why IPFS?</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">Welcome! If you’re new to IPFS, you’ve come to the right place. Before understanding what is IPFS, let's first see why do we need IPFS in the first place?</Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">Let’s say you’re doing some research on aardvarks. (Just roll with it; aardvarks are cool! Did you know they can tunnel 3 feet in only 5 minutes?) You might start by visiting the Wikipedia page on aardvarks at:</Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    <a className={classes.link} target="_blank" href="https://en.wikipedia.org/wiki/Aardvark">https://en.wikipedia.org/wiki/Aardvark</a>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">When you put that URL in your browser’s address bar, your computer asks one of Wikipedia’s computers, which might be somewhere on the other side of the country (or even the planet), for the aardvark page.</Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Seems staright forward, right? But there’s a lot of things that can go wrong.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li><Typography variant="body1">If someone attacks Wikipedia’s web servers or an engineer at Wikipedia makes a big mistake that causes their servers to catch fire, you won't get the wiki page. Thus our <b>current internet is not sufficiently resilient</b>.</Typography></li>
                    <br />
                    <li><Typography variant="body1">In 2017, Turkey blocked Wikipedia and Spain blocked access to sites related to the Catalonian independence movement. There are a lot of more examples of <b>censorship imposed by countries, corporations or individuals</b>.</Typography></li>
                    <br />
                    <li><Typography variant="body1">If your friend who lives a few blocks away from home is also trying to get the same page, he will also have to ask the Wikipedia’s servers(which may be thousands of miles away) for the page. But why can't he just ask your computer to give him the page? This makes the <b>internet slower than it should be</b>.</Typography></li>
                    <br />
                    <li><Typography variant="body1">Suppose you download the wiki page 2 times by mistake. Now this causes an <b>un-neccessary duplication of data</b>. This duplication problem is much more fatal when a lot of people share the same photo or video on facebook or instagram, which are all stored on the facebook or instagram servers, even if it's the same content.</Typography></li>
                    <br />
                    <li><Typography variant="body1">And the list goes on...</Typography></li>
                </ul>
            </Grid>


            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    These problems are due to the way our current internet is modeled. To solve this we need to make changes to the model of the internet at a fundamental level.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPFS is a peer-to-peer storage network that provides a model which solves the above problems(and many more) in a way which is future-proof.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Now as we know why do we need IPFS, let's dive deeper into the core <NavLink className={classes.link} to="/ipfs/concepts/hashes">concepts</NavLink>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} justify="center" align="center" item>
                <NavLink className={classes.link} to="/ipfs/concepts/hashes">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Next
                </Button>
                </NavLink>
            </Grid>
        </Grid >
    )
}

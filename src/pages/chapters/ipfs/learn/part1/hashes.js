import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

import HashingImg from '../../../../../assets/hashing.png'

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
    example: {
        padding: '5%',
        border: '2px solid #3f51b5',
        borderRadius: '8px'
    },
    img: {
        width: '60%'
    }
}))

export default function Hashes() {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        sha1: '',
        sha256: '',
        sha1Hash: '',
        sha256Hash: ''
    });

    const handleChange = name => event => {
        if (name == "sha1") {
            setValues({ ...values, 'sha1Hash': sha1(event.target.value), [name]: event.target.value })
        }
        else if (name == "sha256") {
            setValues({ ...values, 'sha256Hash': sha256(event.target.value), [name]: event.target.value })
        }
    };


    useEffect(() => {
        console.log("what is ipfs?")
        window.scrollTo(0, 0)
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>What are Hashes and Why do we need them?</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        What is a hash function and a hash?
                   </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    A hash function is simply a mathematical function that takes in input, and gives a unique output. For any input, you will always receive the same unique output whenever the hash function is run. In this way, every input has a determined output.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" item>
                <img src={HashingImg} className={classes.img} />
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <b>Note that the input can be anything from your name, photos to big movie files.</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    The function which converts input to output is called a <b>hash function</b>, and the output is called a <b>hash</b>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Here is an example of the SHA-256 hash function. Type your name in the input field and see what hash output you get.
                </Typography>
            </Grid>

            <Grid key={0} xs={12}
                className={classes.example}
                item>
                <TextField
                    id="outlined-sha256"
                    label="Type your name here"
                    className={classes.textField}
                    value={values.sha256}
                    onChange={handleChange('sha256')}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <span className={classes.code}>SHA-256 Hash: {values.sha256Hash}</span>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <b>
                        Notice that even if you add a space or make a letter capital, the hash output changes.
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    There are also other hash functions such as <a target="_blank" href="https://en.wikipedia.org/wiki/SHA-1" className={classes.link}> SHA-1</a> (used by Git), <a target="_blank" href="https://en.wikipedia.org/wiki/SHA-2" className={classes.link}>SHA-256</a>, or <a target="_blank" href="https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2" className={classes.link}>BLAKE2</a>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    These hash functions differ by the algorithm(internal mathematics) they use to convert the input to the output. Due to the use of different algorithms, the output of these algorithms have different length of letters.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    You can check out the SHA-1 hash function below and see how it returns a different type of output than SHA-256.
                </Typography>
            </Grid>

            <Grid key={0} xs={12}
                className={classes.example}
                item>
                <TextField
                    id="outlined-sha1"
                    label="Type your name here"
                    className={classes.textField}
                    value={values.sha1}
                    onChange={handleChange('sha1')}
                    margin="normal"
                    variant="outlined"
                />
                <br />
                <span className={classes.code}>SHA-1 Hash: {values.sha1Hash}</span>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Notice that the SHA-256 hash is longer than the SHA-1 one. This is because SHA-1 creates a 160 bit(40 letters long) hash, while SHA-256 creates a 256 bit(64 letters long) hash.
                </Typography>
            </Grid>

            {/* <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Hashes can be represented in different bases (<span className={classes.code}>base2</span>, <span className={classes.code}>base16</span>, <span className={classes.code}>base32</span>, etc.). In fact, IPFS makes use of that as part of its <NavLink className={classes.link} to="/ipfs/learn/cid">Content Identifiers</NavLink> which we will see in the next section.
                </Typography>
            </Grid> */}

            {/* <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    You may ask how do I know if a function is a good hash function or not? There can be many functions using which you can produce a unique output from an input. But all these functions are not acceptable hash functions.
                </Typography>
            </Grid> */}

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Every good hash function generates hashes which satisfy the following important properties:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            <b>deterministic</b> : the same input message always returns exactly the same output hash. So, if you put your name again, you will get the same output hash.
                            </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            <b>uncorrelated</b> : a small change in the message should generate a completely different hash.
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            <b>unique</b> : it's infeasible to generate the same hash from two different messages
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            <b>one-way</b> : it's infeasible to guess or calculate the input message from its hash. <b>That's why we have a green arrow(showing easy) and a red arrow(showing hard) in the diagram.</b>
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">

                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        But Why Should I care about all this?
                </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Hash functions are a core part of cybersecurity today, all over the world. They protect your passwords, money, and secrets…not just yours but the information of big banks, hospitals, governments, everyone.
                    </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <b>
                        How do we protect our passwords using hash functions?
                        </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    When you signup on a website, the website <b>never</b> stores your actual password. They store the hash(output) of the password(input).
                    </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    So, when you try to log in and enter the password on the website, the website generates hash of the password and sends the hash to the website servers to check if the hash of the <b>entered</b> password matches with the one which was set at the time of sign up.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Summarising, hashes helped us in the following ways:
                    </Typography>
            </Grid>
            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            The website owner cannot see your actual password.
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            As the hash functions are <b>one-way</b>, thus even if someone hacks the website server and steals the hashes stored on the server, he can't figure out what was the actual password?
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        How IPFS uses Hashes?
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <b>Using the 4 features that we listed above, we can use a cryptographic hash to identify any piece of data</b>: the hash is <b>unique</b> to the data we calculated it from and it’s not too long (a hash is a fixed length, so the SHA-256 hash of a 1 Gigabyte video file is still only 256 bits or 64 letters long), so sending it around the network doesn’t take up a lot of resources.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    That’s critical for a distributed system like IPFS, where we want to be able to store and retrieve data from many places. A computer running IPFS can ask all the peers it’s connected to whether they have a file with a particular hash and, if one of them does, they send back the whole file. Without a short, unique identifier like a cryptographic hash, that wouldn’t be possible. This technique is called <b>“content addressing”</b> — because the content itself is used to form an address, rather than information about the computer and disk location it’s stored at.
                </Typography>
            </Grid>


            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Now as we have understood what is a hash and a hash function, let's move to <NavLink className={classes.link} to="/ipfs/learn/cid"> content addressing and content identifiers(CIDs)</NavLink>.
                    </Typography>
            </Grid>

            <Grid key={0} xs={12} justify="center" align="center" item>
                <NavLink className={classes.link} to="/ipfs/learn/how_ipfs_works">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Previous
                </Button>
                </NavLink>
                <NavLink className={classes.link} to="/ipfs/learn/cid">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Next
                </Button>
                </NavLink>
            </Grid>
        </Grid>
    )
}
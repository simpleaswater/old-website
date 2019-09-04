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

export default function Hashes() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>Hashes</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Hashes are functions that take some arbitrary input and return a fixed-length value. The particular value depends on the given hash algorithm in use, such as <a target="_blank" href="https://en.wikipedia.org/wiki/SHA-1"> SHA-1</a> (used by Git), <a target="_blank" href="https://en.wikipedia.org/wiki/SHA-2">SHA-256</a>, or <a target="_blank" href="https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2">BLAKE2</a>, but a given hash algorithm always returns the same value for a given input. Have a look at the <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_hash_functions">full list of hash functions</a> for more.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    As an example, the input:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">
                    Hello world
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    would be represented by <b>SHA-1</b> as:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">
                    0x7B502C3A1F48C8609AE212CDFB639DEE39673F5E
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    However, the exact same input generates the following output using <b>SHA-256</b>:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">
                    0x64EC88CA00B268E5BA1A35678A1B5316D212F4F366B2477232534A8AECA37F3C
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Notice that the second hash is longer than the first one. This is because SHA-1 creates a 160 bit hash, while SHA-256 creates a 256 bit hash. Also, the prepended 0x is just an indicator that tells us that the following hash is represented as a base 16 (or hexadecimal) number.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Hashes can be represented in different bases (<span className={classes.code}>base2</span>, <span className={classes.code}>base16</span>, <span variant="body2" className={classes.code}>base32</span>, etc.). In fact, IPFS makes use of that as part of its <NavLink className={classes.link} to="/ipfs/concepts/cid"> Content Identifiers</NavLink> and supports mulitiple base representations at the same time, using the <a target="_blank" href="https://github.com/multiformats/multibase"> Multibase</a> protocol.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    For example, the SHA-256 hash of “Hello World” from above can be represented as base 32 as:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">
                    mtwirsqawjuoloq2gvtyug2tc3jbf5htm2zeo4rsknfiv3fdp46a
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        Characteristics of cryptographic hashes
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Cryptographic hashes come with a couple of very important characteristics:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            <b>deterministic</b> - the same input message always returns exactly the same output hash
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            <b>uncorrelated</b> - a small change in the message should generate a completely different hash
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            <b>unique</b> - it’s infeasible to generate the same hash from two different messages
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            <b>one-way</b> - it’s infeasible to guess or calculate the input message from its hash
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    It turns out these features also mean we can use a cryptographic hash to identify any piece of data: the hash is unique to the data we calculated it from and it’s not too long (a hash is a fixed length, so the SHA-256 hash of a 1 Gigabyte video file is still only 32 bytes), so sending it around the network doesn’t take up a lot of resources.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    That’s critical for a distributed system like IPFS, where we want to be able to store and retrieve data from many places. A computer running IPFS can ask all the peers it’s connected to whether they have a file with a particular hash and, if one of them does, they send back the whole file. Without a short, unique identifier like a cryptographic hash, that wouldn’t be possible. This technique is called “content addressing” — because the content itself is used to form an address, rather than information about the computer and disk location it’s stored at.
                </Typography>
            </Grid>
        </Grid>
    )
}
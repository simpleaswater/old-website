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

export default function Ipns() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>IPNS</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Inter-Planetary Name System (IPNS) is a system for creating and updating mutable links to IPFS content. Since objects in IPFS are content-addressed, their address changes every time their content does. That’s useful for a variety of things, but it makes it hard to get the latest version of something.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    A name in IPNS is the hash of a public key. It is associated with a record containing information about the hash it links to that is signed by the corresponding private key. New records can be signed and published at any time.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    When looking up an IPNS address, use the /ipns/ prefix:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">
                    /ipns/QmSrPmbaUKA3ZodhzPWZnpFgcPMFWF4QsxXbkWfEptTBJd
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPNS is not the only way to create mutable addresses on IPFS. You can also use DNSLink (which is currently much faster than IPNS and also uses more readable names). Other community members are exploring ways to use blockchains to store common name records.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        Example:
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Imagine you want to publish your website under IPFS. You can use the Files API to publish your static website and then you’ll get a CID you can link to. But when you need to make a change, a problem arises: you get a new CID because you now have a different content. And it is not possible for you to be always giving others the new address.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Here’s where the Name API comes in handy. With it, you can create a single, stable IPNS address that points to the CID for the latest version of your website.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">
                    // The address of your files.
                    <br />
                    const addr = '/ipfs/QmbezGequPwcsWo8UL4wDF6a8hYwM1hmbzYv2mnKkEWaUp'
                    <br /><br />
                    {`
                    ipfs.name.publish(addr, function (err, res) {
                        // You now receive a res which contains two fields:
                        //   - name: the name under which the content was published.
                        //   - value: the "real" address to which Name points.
                        console.log(\`https://gateway.ipfs.io/ipns/\${res.name}\`)
                    })
                    `}

                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    In the same way, you can republish a new version of your website under the same address. By default, <span className={classes.code}>ipfs.name.publish</span> will use the Peer ID.
                </Typography>
            </Grid>
        </Grid>
    )
}
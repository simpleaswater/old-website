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

export default function DnsLink() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4"><b>DNSLink</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <b>
                        NOTE: The info below is a quick guide to DNSLink. For a more complete guide, including tutorials, usage examples and FAQs, check out <a target="_blank" href="http://dnslink.io/">dnslink.io</a>.
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        About DNSLink
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    DNSLink uses <a target="_blank" href="https://en.wikipedia.org/wiki/TXT_record"> DNS TXT</a> records to map a domain name (like ipfs.io) to an IPFS address. Because you can edit your DNS records, you can use them to always point to the latest version of an object in IPFS (remember that an IPFS object’s address changes if you modify the object). Because DNSLink uses DNS records, the names it produces are also usually easy to type and read.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    A DNSLink address looks like an <NavLink className={classes.link} to="/ipfs/concepts/ipns">IPNS</NavLink> address, but it uses a domain name in place of a hashed public key:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography body2>
                    /ipns/ipfs.io
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Just like normal IPFS addresses, they can include links to other files:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography body2>
                    /ipns/ipfs.io/media/
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    When an IPFS client or node attempts to resolve that address, it looks for a TXT record for ipfs.io with content like:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography body2>
                    {'dnslink=/ipfs/<CID for your content here>'}
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    For example, if you look up ipfs.io’s DNS records, you’ll see its DNSLink entry:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography body2>
                    {'$ dig +noall +answer TXT ipfs.io'}
                    <br /><br />
                    {'ipfs.io.		59	IN	TXT	"dnslink=/ipfs/QmYNQJoKGNHTpPxCBPh9KkDpaExgd2duMa3aF6ytMpHdao"'}
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Based on that, this address:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2" className={classes.code}>
                    /ipns/ipfs.io/media/
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Will get you this block:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2" className={classes.code}>
                    /ipfs/QmYNQJoKGNHTpPxCBPh9KkDpaExgd2duMa3aF6ytMpHdao/media/
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        Publishing via a Subdomain
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    You can also publish DNSLink records using a special subdomain named <span className={classes.code}>_dnslink</span>. This is useful when you want to improve the security of an automated setup or delegate control over your DNSLink records to a third-party without giving away full control over the original DNS zone.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    For example, <NavLink to="/" onClick={() => { this.forceUpdate()}} className={classes.code}>simpleaswater.com</NavLink> does not have a TXT record, but the page still loads because a TXT record exists for <span className={classes.code}>_dnslink.docs.ipfs.io</span>:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2" className={classes.code}>
                    {'$ dig +noall +answer TXT _dnslink.docs.ipfs.io'}
                    <br /><br />
                    {'_dnslink.docs.ipfs.io.  34  IN  TXT "dnslink=/ipfs/QmeveuwF5wWBSgUXLG6p1oxF3GKkgjEnhA6AAwHUoVsx6E"'}
                </Typography>
            </Grid>
        </Grid>
    )
}
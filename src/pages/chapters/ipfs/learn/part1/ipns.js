import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { NavLink } from 'react-router-dom'

import ipfs from '../../../../../utils/ipfs'
import { Buffer } from 'multihashing-async';



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
    rightIcon: {
        marginLeft: theme.spacing(1),
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

export default function Cid() {
    const classes = useStyles();

    const [values, setValues] = React.useState({ cid: '' });

    const getKeyList = async () => {
        let keyList = await ipfs.getKeyList();
        setValues({ ...values, 'cid': keyList[0].id })
    };

    useEffect(() => {
        console.log("what is ipfs?")
        window.scrollTo(0, 0)
    }, []);

    return (
        <Grid container spacing={3}>

            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>InterPlanetary Naming System (IPNS)</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    In the <NavLink className={classes.link} to="/ipfs/learn/ipns">last section</NavLink>, we learned how we can create a more <b>resilient</b>, <b>censorship-resistant</b> and <b>faster internet</b> using <b>content addressing</b>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    But there are 2 problems here:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            We don't want the links to our photos, websites turned into a <b>lengthy</b> and <b>non-human friendly</b> sequence of letter like this:<br /> <span className={classes.code}>QmPAwR5un1YPJEF6iB7KvErDmAhiXxwL5J5qjA3Z9ceKqv</span>
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            We know that for each unique input data we have a unique CID. So, this means that if I update anything on my website, then the resulting CID will change and hence the link to <span className={classes.code}>simpleaswater.com</span> will change. This means the <b>links on IPFS are permanent</b>.
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    To solve these problems we use the <b>Inter-Planetary Naming System</b> or <b>IPNS</b>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    For those who are familiar with <a className={classes.link} target="_blank" href="https://www.cloudflare.com/learning/dns/what-is-dns/">Domain Name System or DNS</a>, IPNS is a decentralized version of DNS.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    In short, IPNS does 2 things:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            It allows you to generate a link(<b>mutable address</b>) which always <b>points to the latest version of the content</b>. So, even if I update the website, it will still have the same link.
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            It allows you to replace the non-human friendly CID with a <b>human-friendly label</b>.
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    This is how an IPNS link looks like:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    /ipns/QmSrPmbaUKA3ZodhzPWZnpFgcPMFWF4QsxXbkWfEptTBJd
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Which can be further converted to
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    /ipns/simpleaswater.com
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Voila, you have a pretty link :)
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        But, How does it Work?
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    As every human has a name, IPFS peers also have names which are called <a className={classes.link} target="_blank" href="https://www.khanacademy.org/computing/computer-science/internet-intro/internet-works-intro/v/the-internet-encryption-and-public-keys">public keys</a>. Each IPFS peer has its own unique public key. So, the <b>public keys almost never clash</b>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    The problem with public keys is that they are long. Imean really long… Below is an IPFS public key:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQB9UeL9CjQnYktgPxl3cpfQ
                    At/iI+QK4/bUVO4HcbcDtdLLK8iorsrduBXbZ+PYdLnTBuYL3NNnyGDvHri5moaf
                    C+WxClvBDTo+wzjqEF1PCgou8XXgCsbCOcdEh3BfSN9YAI7gb0sT70/C2RDVLaFa
                    lo0kjA7csnKKoWS4iD70QZJIlo8vbD02B7HHsXcLQy3L02vCMcbGaSjZ1oeDXpNE
                    CHo+3MNC34JFl3e6XLC7hduv9TubdCu6ZutbaqSkftBxE8AI7pYDsu/AeOMcFeAV
                    KUjlAoC2nxw5tx1mdVQIOgJ9Mu5e3SjGzwpbzaSKznQecFZ0ca20gC+xYcVSEBDP<br />
                    AgMBAAE=
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    So, we use the power of hashes again. When we hash the above public key, we get a small CID:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    QmVD2YQF96S6Em8zhgNNDKVc7jKUqTyFRaL6ejwKXUUCju
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    You can check out the hash of public key of IPFS peer's running in your browser below:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" className={classes.example} item>
                <span className={classes.code}><b>Browser Public Key Hash:</b> {values.cid}</span>
                <br />
                <Button variant="contained" color="primary"
                    className={classes.button} onClick={() => { getKeyList() }}>
                    Get Key Hash
                </Button>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    So, if you are hosting a website from your device, and want a permanent link, then it will look like this:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    /ipns/{values.cid || 'browser-ipfs-pubkey-hash'}
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    And if you want, you can change this to a human-friendly name:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    /ipns/your_website_name
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    IPNS is not the only way to create <b>mutable addresses</b> on IPFS. You can also use <NavLink className={classes.link} to="/ipfs/tutorials/dnslink" >DNSLink</NavLink> (which is currently much faster than IPNS and also uses more readable names). Other community members are exploring ways to use blockchains to store common name records.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    If you want to see how this all is done, head over to the <NavLink className={classes.link} to="/ipfs/tutorials/ipns">tutorials section</NavLink>, where you will learn to <NavLink className={classes.link} to="/ipfs/tutorials/ipns">host your website on IPFS using IPNS</NavLink> and <NavLink className={classes.link} to="/ipfs/tutorials/dnslink">DNSLink</NavLink>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} justify="center" align="center" item>
                <NavLink className={classes.link} to="/ipfs/learn/cid">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Previous
                </Button>
                </NavLink>
                <NavLink className={classes.link} to="/ipfs/learn/pinning">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Next
                </Button>
                </NavLink>
            </Grid>
        </Grid>
    )
}
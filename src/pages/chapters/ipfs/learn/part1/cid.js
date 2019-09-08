import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { NavLink } from 'react-router-dom'

import uploadToIPFS from '../../../../../utils/uploadToIPFS'
import { Buffer } from 'multihashing-async';

import LocationAddressingImg from '../../../../../assets/cid01.png'
import ContentAddressingImg from '../../../../../assets/cid02.png'

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
    },
    comment: {
        color: '#D5DBDB'
    }
}))

export default function Cid() {
    const classes = useStyles();

    const [values, setValues] = React.useState({ cid: 'Upload file to get CID' });

    /* const handleClick = async () => {
        let cid = await ipfs.addToIPFS(document.getElementById("outlined-cid").value);
        console.log(cid[0].hash)
        setValues({ ...values, 'cid': cid[0].hash })
    }; */

    const handleFileUpload = event => {
        console.log(event.target.files[0])
        uploadToIPFS(event.target.files[0])
    }

    useEffect(() => {
        console.log("what is ipfs?")
        window.scrollTo(0, 0)
    }, []);

    return (
        <Grid container spacing={3}>

            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>Content Addressing & Content Identifiers (CIDs)</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        Content addressing and linked data
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Content addressing is a way to find data in a network using its content rather than its location.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    To understand this let's take an example of a library with a lot of books.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    When you look for a book in the library, you often ask for it by the title. That's <b>content addressing</b> because you're asking for what it is.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    If you were using <b>location addressing</b> to find that book, you would ask for it by where it is: "I want the book that's on the second floor, first stack, third shelf from the bottom, four books from the left." If someone moved that book, you would be out of luck!
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Now, let's move from our library to the world's biggest library, the internet.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    It's the same on the internet and on your computer. Right now, content is found by location(using location addressing), such as…
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    <a className={classes.link} target="_blank" href="https://simpleaswater.com/logo.ico">https://simpleaswater.com/logo.ico</a>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" item>
                <img src={LocationAddressingImg} className={classes.img} />
                <br />
                <Typography variant="body2">
                    <i>Location Addressing</i>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    This location addressing approach has a number of problems:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            Let's suppose I am living in Turkey and <span className={classes.code}>simpleaswater.com</span> is hosting a clone of Wikipedia. As Wikipedia is banned here, this website will receive a lot of traffic. This will make the website slow and could probably crash it.
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            If the government finds out, it will be easy for them to shut down the website(<b>censorship</b>), as there is only one server hosting it.
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    If you recall, these are the same problems that we mentioned in the <NavLink className={classes.link} to="/ipfs/learn/why_ipfs">Why do we need IPFS</NavLink> section.
                </Typography>
            </Grid>



            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    To solve this problem, we use content addressing.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    The way we do is by taking the content of the file and hashing it. Try uploading an image to IPFS and get the hash using the below button. In the IPFS ecosystem, this hash is called <b>Content Identifier, or CID</b>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" className={classes.example} item>
                <input accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={handleFileUpload}
                    hidden />
                <label htmlFor="icon-button-file">
                    <Button variant="contained" component="span" color="primary" className={classes.button}>
                        Upload to IPFS
                    <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                </label>

                <br />
                <span className={classes.code}><b>CID:</b> {values.cid}</span>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    And as we saw in the previous lesson, we get a unique sequence of letters like one given below for <span className={classes.code}>logo.ico</span>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography variant="body2">
                    QmPAwR5un1YPJEF6iB7KvErDmAhiXxwL5J5qjA3Z9ceKqv
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Now you can use this hash to access the image from any computer that has the image with the above hash(given that the computer is running IPFS).
                </Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" item>
                <img src={ContentAddressingImg} className={classes.img} />
                <br />
                <Typography variant="body2">
                    <i>Content Addressing</i>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    Take a look for yourself:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} className={classes.code} item>
                <Typography className={classes.code} variant="body2">
                    <a className={classes.link} target="_blank" href="https://ipfs.globalupload.io/QmPAwR5un1YPJEF6iB7KvErDmAhiXxwL5J5qjA3Z9ceKqv">https://ipfs.globalupload.io/QmPAwR5un1YPJEF6iB7KvErDmAhiXxwL5J5qjA3Z9ceKqv</a>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    So, now we are not going to a folder on a specific server(location addressing), but asking anyone in the IPFS network who has a file, which will have the hash value <span className={classes.code}>QmPAwR5un1YPJEF6iB7KvErDmAhiXxwL5J5qjA3Z9ceKqv</span>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    So, if the people of Turkey were using content addressing to access the data on the internet, then the above problems will be solved:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            Everybody who is using the Wikipedia website can also share the webpages from their computer. So, the load on <span className={classes.code}>simpleaswater.com</span> will decrease. So, <b>you will get the webpages faster</b>.
                        </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            If the government finds out, it will be easy for them to shut down the website(<b>censorship-resistant</b>), as there is only one server hosting it.
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    So, in this lesson, we learned how we can create a more <b>resilient</b>, <b>censorship-resistant</b> and <b>faster internet</b> using <b>content addressing</b>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    In the next section, we will study about <NavLink className={classes.link} to="/ipfs/learn/ipns">InterPlanetary Naming System</NavLink>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} justify="center" align="center" item>
                <NavLink className={classes.link} to="/ipfs/learn/hashes">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Previous
                </Button>
                </NavLink>
                <NavLink className={classes.link} to="/ipfs/learn/ipns">
                    <Button variant="contained" color="primary" className={classes.button}>
                        Next
                </Button>
                </NavLink>
            </Grid>
        </Grid>
    )
}
import React, { Component, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TopBar from '../../components/LayoutComponents/TopBar'
import Footer from '../../components/LayoutComponents/Footer'
import ImgMediaCard from '../../components/LayoutComponents/ImgMediaCard'
import Subscribe from '../../components/LayoutComponents/Subscribe'


import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


import MainSection from './main'
import ArticlesSection from './articles'
import Tutorials from './tutorials'
import EthereumTutorials from './ethereum'
import Frameworks from './frameworks'
import VideoTutorials from './videoTutorials'
import BlockchainVideoTutorials from './blockchainVideoTutorials'
import BlockchainCourses from './blockchainCourses'
import Podcasts from './podcasts'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function Test() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        heartClicked: [
            false,
            false,
            false,
            false,
            false,
            false,
        ]
    });

    const toggleHeart = (index) => {
        state.heartClicked[index] = !state.heartClicked[index]
        let newState = state.heartClicked
        setState({ ...state, heartClicked: newState })
    }

    return (
        <Fragment>
            <Grid container justify="center" style={{ marginTop: '40px' }}>
                <Grid key={0} item>
                    <center>
                        <font style={{ fontFamily: 'Comfortaa', 'font-size': '42px' }} color="#8b60ed">SimpleAsWater</font>
                        <br /><br />
                        <font style={{ fontFamily: 'Comfortaa', 'font-size': '24px' }}>A <b>Friendly Community</b> where Everybody <b>Learns</b> and <b>Builds</b> the <b>Distributed Web</b>.</font>
                    </center>
                </Grid>
                <Grid key={1} item>
                    {<MainSection />}
                </Grid>

                <Grid key={2} xs={12} item style={{ marginTop: '40px' }}>
                    <Subscribe placeholderText="Get more free courses" />
                </Grid>

                {/*                 <Grid key={2} item style={{ marginTop: '80px', paddingLeft: '10%', paddingRight: '10%' }}>
                    <center>
                        <font style={{ fontFamily: 'Comfortaa', 'font-size': '36px' }}>Web 3.0 Articles and Tutorials</font>
                        <br /><br />
                        <font style={{ fontFamily: 'Comfortaa', 'font-size': '15px' }} color="#808080">Whether you’re new to blockchain or have some familiarity with it, we have posts that cover everything from the basics to in-depth technical tutorials. If you want to learn about blockchain programming and how it works, be sure to read the “What is Blockchain” articles. Once you’re ready to dive in further, we’ve gathered the best blockchain and programming tutorials.</font>
                    </center>
                </Grid>

                <Grid key={3} item style={{ marginTop: '80px' }} spacing={2}>
                    {<ArticlesSection />}
                </Grid>

                <Grid key={4} item style={{ marginTop: '80px' }} spacing={2}>
                    {<Tutorials />}
                </Grid>

                <Grid key={5} item style={{ marginTop: '80px' }} spacing={2}>
                    {<EthereumTutorials />}
                </Grid>




                <Grid key={6} item style={{ marginTop: '80px', paddingLeft: '10%', paddingRight: '10%' }}>
                    <center>
                        <font style={{ fontFamily: 'Comfortaa', 'font-size': '36px' }} >Development Tools</font>
                        <br /><br />
                        <div style={{}}>
                            <font style={{ fontFamily: 'Comfortaa', 'font-size': '15px' }} color="#808080">To get started with blockchain programming, here are the different tools that you may use — from blockchain frameworks, libraries, clients, verification, and security tools to popular blockchain services and chains (and everything in between).</font>
                        </div>
                    </center>
                </Grid>


                <Grid key={502} item style={{ marginTop: '40px' }}>
                    <Subscribe placeholderText="Get 5 handpicked tools" />
                </Grid>

                <Grid key={7} item style={{ marginTop: '80px' }} spacing={2}>
                    <Frameworks />
                </Grid>


                <Grid key={8} item style={{ marginTop: '80px' }} spacing={2}>
                    <VideoTutorials />
                </Grid>





                <Grid key={9} item style={{ marginTop: '80px', paddingLeft: '10%', paddingRight: '10%' }}>
                    <center>
                        <font style={{ fontFamily: 'Comfortaa', 'font-size': '36px' }} >Other Learning Resources</font>
                        <br /><br />
                        <font style={{ fontFamily: 'Comfortaa', 'font-size': '15px' }} color="#808080">More of a visual learner? We’ve also gathered some of the most helpful video tutorials on blockchain. If you prefer a more structured course to get up to speed on blockchain, there are several to choose from. And, if you’re always on-the-go, be sure to listen to the latest Blockchain podcasts.</font>
                    </center>
                </Grid>


                <Grid key={503} item style={{ marginTop: '40px' }}>
                    <Subscribe placeholderText="Get 5 handpicked resources Weekly" />
                </Grid>


                <Grid key={10} item style={{ marginTop: '80px' }} spacing={2}>
                    <BlockchainVideoTutorials />
                </Grid>





                <Grid key={11} item style={{ marginTop: '80px' }} spacing={2}>
                    <BlockchainCourses />
                </Grid>



                <Grid key={12} item style={{ marginTop: '80px' }} spacing={2}>
                    <Podcasts />
                </Grid>



                <Grid key={13} item style={{ marginTop: '80px' }} spacing={2}>
                    <center>
                        <Typography gutterBottom variant="h6" component="h5">
                            <b>Are you a blockchain expert?</b>
                        </Typography>



                        <Button color="secondary" variant="contained">
                            <b>Apply to be a Mentor</b>
                        </Button>
                    </center>
                </Grid> */}

            </Grid>
        </Fragment>
    )
}
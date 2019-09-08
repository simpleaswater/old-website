import React, { useState, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImgMediaCard from '../../../components/LayoutComponents/ImgMediaCard'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

import content from './content.json'


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


export default function Main() {
    const classes = useStyles();

    //state handling
    const [state, setState] = useState({
        bottom: false,
        heartClicked: {
            "00": false,
            "01": false,
            "02": false,
            "10": false,
            "11": false,
            "12": false
        }
    });

    const iconList = {
        "Twitter": <i className="fa fa-twitter" aria-hidden="true"></i>,
        /* "LinkedIn": <i className="fa fa-linkedin" aria-hidden="true"></i>,
        "Facebook": <i className="fa fa-facebook" aria-hidden="true"></i>,
        "Email": <i className="fa fa-envelope" aria-hidden="true"></i> */
    }

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Twitter'/* , 'LinkedIn', 'Facebook', 'Email' */].map((text, index) => (
                    <a class="twitter-share-button"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                        href="https://twitter.com/intent/tweet?text=Human-friendly%20Docs%20for%20IPFS%3A%20https%3A//simpleaswater.com/ipfs&via=simpleaswater_"
                        data-size="large">
                        <ListItem button key={index}>
                            <ListItemIcon>{
                                iconList[text]
                            }</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    );


    //toggle Drawer
    const toggleDrawer = (side, open) => event => {
        console.log("XXXXXXXXXXXXXXXxx")
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };


    const toggleHeart = (index) => {
        state.heartClicked[index] = !state.heartClicked[index]
        let newState = state.heartClicked
        setState({ ...state, heartClicked: newState })
    }

    const getMainSection = (data) => {
        return (
            <Grid container justify="center" spacing={2} style={{ width: '100%', marginTop: "40px" }}>
                <Grid key={0} item>
                    {getRow(0, data.slice(0, 3))}
                </Grid>
                <Grid key={1} item>
                    {getRow(1, data.slice(3, 6))}
                </Grid>
            </Grid>
        )
    }

    const getRow = (rowIndex, data) => {
        return (
            <Grid key={rowIndex} container justify="center" style={{ margin: 'auto' }} spacing={2} >
                {
                    data.map((cardData, cardIndex) => {
                        return getCard(cardIndex, rowIndex, cardData)
                    })
                }
            </Grid>
        )
    }

    const getCard = (cardIndex, rowIndex, data) => {
        return (
            <Grid key={rowIndex} item>
                <ImgMediaCard
                    key={`${rowIndex}${cardIndex}`}
                    title={data.title}
                    imgPath={data.imgPath}
                    alt={data.alt}
                    link={data.link}
                    cardContent={
                        <Fragment>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h2"
                                dangerouslySetInnerHTML={{ __html: data.cardContent.title }} />
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                dangerouslySetInnerHTML={{ __html: data.cardContent.description }} />
                        </Fragment>
                    }
                    toggleHeart={() => toggleHeart(`${rowIndex}${cardIndex}`)}
                    toggleDrawer={toggleDrawer('bottom', true)}
                    favoriteIcon={
                        state.heartClicked[`${rowIndex}${cardIndex}`] ?
                            <FavoriteIcon color="secondary" />
                            :
                            <FavoriteOutlinedIcon />}
                    shareIcon={<ShareIcon />}
                    labels={data.labels}
                />
            </Grid>
        )
    }


    return (
        <Fragment>
            {getMainSection(content)}
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {fullList('bottom')}
            </Drawer>
        </Fragment>
    )

}
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
import Button from '@material-ui/core/Button';

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

export default function Articles() {
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
        "Twitter": <i class="fa fa-twitter" aria-hidden="true"></i>,
        "LinkedIn": <i class="fa fa-linkedin" aria-hidden="true"></i>,
        "Facebook": <i class="fa fa-facebook" aria-hidden="true"></i>,
        "Email": <i class="fa fa-envelope" aria-hidden="true"></i>
    }

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Twitter', 'LinkedIn', 'Facebook', 'Email'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{
                            iconList[text]
                        }</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );


    //toggle Drawer
    const toggleDrawer = (side, open) => event => {
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

    const getSection = (data) => {
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
            <Grid container justify="center" style={{ margin: 'auto' }} spacing={2} >
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
                    title={data.title}
                    imgPath={data.imgPath}
                    alt={data.alt}
                    link={data.link}
                    cardContent={
                        <Fragment>
                            <Typography gutterBottom variant="h6" component="h2">
                                {data.cardContent.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.cardContent.description}
                            </Typography>
                        </Fragment>
                    }
                    favoriteIcon={
                        state.heartClicked[`${rowIndex}${cardIndex}`] ?
                            <FavoriteIcon color="secondary" onClick={() => toggleHeart(`${rowIndex}${cardIndex}`)} />
                            :
                            <FavoriteOutlinedIcon onClick={() => toggleHeart(`${rowIndex}${cardIndex}`)} />}
                    shareIcon={<ShareIcon onClick={toggleDrawer('bottom', true)} />}
                /* label={['eth','paid']} */
                />
            </Grid>
        )
    }


    return (
        <Grid container justify="center" spacing={2} >
            <Grid key={0} item>
                <center>
                    <b><font style={{ fontFamily: 'Comfortaa', 'font-size': '24px' }}>Blockchain Frameworks, Libraries & More</font></b>
                </center>
            </Grid>
            <Grid key={1} spacing={2} item>
                {getSection(content)}
            </Grid>
            <Grid key={1} style={{ marginTop: '20px' }} item>
                <Button color="secondary" variant="contained">
                    <b>More Articles</b>
                </Button>
            </Grid>
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {fullList('bottom')}
            </Drawer>
        </Grid>
    )
}

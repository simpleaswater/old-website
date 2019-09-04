import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';

import AddLink from '../Link'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        position: 'relative'
    },
    labels: {
        margin: theme.spacing(1),
        position: 'absolute',
        right: 0
    },
    chip: {
        backgroundColor: '#ECE2F7'
    },
    cardAction: {
        minHeight: '120px'
    }
}))


export default function ImgMediaCard(props) {

    const { title, imgPath, alt, cardContent, favoriteIcon, shareIcon, link, labels, toggleHeart, toggleDrawer } = props

    const classes = useStyles();

    const [raised, toggleRaised] = useState(false);

    const handleHover = () => { toggleRaised(!raised) }

    return (
        <Card className={classes.card}
            onMouseOver={handleHover}
            onMouseOut={handleHover}
            raised={raised}>
            <AddLink link={link}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={alt}
                        height="140"
                        image={imgPath}
                        title={title}
                    />
                    <CardContent>
                        <div className={classes.cardAction}>
                            {cardContent}
                        </div>
                    </CardContent>
                </CardActionArea>
            </AddLink>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={toggleHeart}>
                    {favoriteIcon}
                </IconButton>
                <IconButton aria-label="share" onClick={toggleDrawer}>
                    {shareIcon}
                </IconButton>
                <div className={classes.labels}>
                    {
                        labels ? labels.map((label, index) => {
                            return <Fragment><Chip className={classes.chip} key={index} label={label} />{' '}</Fragment>
                        })
                            :
                            null
                    }
                </div>
            </CardActions>
        </Card>
    );
}

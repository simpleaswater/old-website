import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Overview from './overview'
/* import Introduction from './introduction'
import Concepts from './concepts'
import Tutorials from './tutorials'
import Starterkit from './starterkit' */


const useStyles = makeStyles({
    root: {
        marginTop: '60px'
    },
});


export default function Index(props) {
    const classes = useStyles();

    const sections = {
        "overview": <Overview {...props} />,
        /* "introduction": <Introduction {...props} />,
        "concepts": <Concepts {...props} />,
        "tutorials": <Tutorials {...props} />,
        "starter_kits": <Starterkit {...props} /> */
    }

    const { match } = props;

    return (
        <div className={classes.root}>
            {sections[match.params.section]}
        </div>
    )
}

import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Overview from './overview'
import Learn from './learn'
import Introduction from './introduction'
import Concepts from './concepts'
import Tutorials from './tutorials'
import GettingStarted from './getting_started'


const useStyles = makeStyles({
    root: {
        marginTop: '60px'
    },
});


export default function Index(props) {
    const classes = useStyles();

    const sections = {
        "overview": <Overview {...props} />,
        "learn": <Learn {...props} />,
        "introduction": <Introduction {...props} />,
        "concepts": <Concepts {...props} />,
        "tutorials": <Tutorials {...props} />,
        "getting_started": <GettingStarted {...props} />
    }

    const { match } = props;

    return (
        <div className={classes.root}>
            {sections[match.params.section || "overview"]}
        </div>
    )
}

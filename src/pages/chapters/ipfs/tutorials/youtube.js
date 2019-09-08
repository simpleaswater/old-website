import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

import Subscribe from '../../../../components/LayoutComponents/Subscribe'

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
    },
    comingsoon: {
        color: "#D5DBDB",
        marginTop: '40px'
    }
})

export default function Bitswap() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4"><b>Youtube on IPFS</b></Typography>
            </Grid>

            <Grid key={0} xs={12} align="center" item>
                <Typography variant="h5" className={classes.comingsoon}><b>Coming Soon...</b></Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Subscribe placeholderText="Get access to this when it's here" buttonText="" />
            </Grid>
        </Grid>
    )
}
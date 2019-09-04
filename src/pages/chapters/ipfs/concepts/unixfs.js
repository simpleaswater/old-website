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

export default function Unixfs() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>Unixfs</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    A file in IPFS isn’t just content. It might be too big to fit in a single block, so it needs metadata to link all its blocks together. It might be a symlink or a directory, so it needs metadata to link to other files. UnixFS is the data format used to represent files and all their links and metadata in IPFS, and is loosely based on how files work in Unix. When you add a <i>file</i> to IPFS, you are creating a block (or a tree of blocks) in the UnixFS format.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    UnixFS is a <a target="_blank" href="https://developers.google.com/protocol-buffers/" className={classes.link}> protocol-buffers</a>-based format. You can find the definitions for it at:<br /> <a target="_blank" href="https://github.com/ipfs/go-unixfs/blob/master/pb/unixfs.proto" className={classes.link}>https://github.com/ipfs/go-unixfs/blob/master/pb/unixfs.proto</a>.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    <i>Note: we are currently designing an updated version of UnixFS that will be IPLD-compatible. You can follow along or participate  <a target="_blank" href="https://github.com/ipfs/unixfs-v2" className={classes.link}> on GitHub</a>.</i>
                </Typography>
            </Grid>
        </Grid>
    )
}
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


class Footer extends Component {
    render() {
        return (
            <AppBar position="static" color="default" style={{ marginTop: "40px" }}>
                <Toolbar style={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h6" color="inherit" align="center">
                        Stuck Somewhere? Discuss it with the community here
                        </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}


export default Footer
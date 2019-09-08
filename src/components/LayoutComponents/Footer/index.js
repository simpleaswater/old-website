import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core';


class Footer extends Component {
    render() {
        return (
            <AppBar position="static" color="default" style={{ marginTop: "40px" }}>
                <Toolbar style={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h6" color="inherit" align="center">
                        <a
                            href="https://discord.gg/2UFQ8f"
                            target="_blank"
                            style={{ textDecoration: 'none' }}>
                            Stuck Somewhere? Discuss it with the community here
                        </a>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}


export default Footer
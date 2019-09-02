import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


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

export default function ShareDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        right: false,
        bottom: false,
    });

    const iconList = {
        "Twitter": <i class="fa fa-twitter" aria-hidden="true"></i>,
        "LinkedIn": <i class="fa fa-linkedin" aria-hidden="true"></i>,
        "Facebook": <i class="fa fa-facebook" aria-hidden="true"></i>,
        "Email": <i class="fa fa-envelope" aria-hidden="true"></i>
    }

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

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

    return (
        <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
            {fullList('bottom')}
        </Drawer>
    )
}

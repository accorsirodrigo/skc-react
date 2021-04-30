
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Button, AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import skcLogo from './logo.svg'
import bgSkc from './img/bg/GRU_2793_00007.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navBar: {
        background: "#a80202"
    },
    headerImage: {
        backgroundImage: `url(${bgSkc})`,
        width: "100%"
    },
    image: {
        width: "20%",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.headerImage}>
                <img src={skcLogo} className={classes.image}></img>
            </div>

            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Serra Kart Clube
                    </Typography>
                    <Button color="inherit" >A entidade</Button>
                    <Button color="inherit" >Eventos</Button>
                    <Button color="inherit" >Fotos</Button>
                    <Button color="inherit" >Classificados</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
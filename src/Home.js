import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Switch, AppBar, Toolbar, IconButton, Typography, Button, Divider, Drawer, List, ListSubheader, ListItem, ListItemIcon, ListItemText, Icon, Box, Grid, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsIcon from '@material-ui/icons/Sports';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MovieIcon from '@material-ui/icons/Movie';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,

    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 30
    },
    MenuIcon: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3)
    },
    icons: {
        paddingRight: theme.spacing(3)
    },
    grow: {
        flexGrow: 1,
    },
    subheader: {
        textTransform: 'uppercase'
    },
    ListItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    ListItemText: {
        fontSize: 14,
    },
}));

const videos = [
    {
        id: 1,
        title:
            'FEED DO USU??RIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualiza????es',
        date: 'h?? 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },
    {
        id: 2,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Lucas Nhimi',
        views: '957 mil visualiza????es',
        date: 'h?? 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
    },
    {
        id: 3,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '106 mil visualiza????es',
        date: 'h?? 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
    },
    {
        id: 4,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Lucas Nhimi',
        views: '5,6 mi de visualiza????es',
        date: 'h?? 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.png',
    },
    {
        id: 5,
        title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Lucas Nhimi',
        views: '2,2 mi de visualiza????es',
        date: 'h?? 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.png',
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Lucas Nhimi',
        views: '233 mil visualiza????es',
        date: 'h?? 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.png',
    },
    {
        id: 7,
        title:
            'PR??-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Lucas Nhimi',
        views: '118 mil visualiza????es',
        date: 'h?? 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.png',
    },
    {
        id: 8,
        title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Lucas Nhimi',
        views: '1,9 mi de visualiza????es',
        date: 'h?? 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.png',
    },
];
function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.MenuIcon}
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? '/images/branco.png' : '/images/preto.png'} alt='logo' className={classes.logo} />
                    <div className={classes.grow} />
                    <Switch
                        value={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className={classes.icons}
                    />
                    <IconButton
                        className={classes.icons}
                    >
                        <VideoCallIcon />
                    </IconButton>

                    <IconButton
                        className={classes.icons}
                    >
                        <AppsIcon />
                    </IconButton>

                    <IconButton
                        className={classes.icons}
                    >
                        <MoreVertIcon />
                    </IconButton>

                    <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Box display='flex'>
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'In??cio'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Em alta'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Inscri????es'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon> <VideoLibraryIcon /> </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Biblioteca'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon> <HistoryIcon /> </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Hist??rico'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={4}>
                                <Typography variant='body2'>
                                    Fa??a login para curtir v??deos, comentar e se inscrever.
                                </Typography>
                                <Box mt={2}>
                                    <Button variant='outlined' color='secondary' startIcon={<AccountCircleIcon />}>
                                        Fazer Login
                                    </Button>

                                </Box>
                            </Box>
                            <Divider />

                            <List
                                component='nav'
                                aria-labelledby='nested-list-subheader'
                                subheader={
                                    <ListSubheader component='div' id='nested-list-subheader' className={classes.subheader}>O melhor do Youtube</ListSubheader>
                                }
                            >

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<MusicNoteIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'M??sica'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<SportsIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Esportes'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Jogos'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<LocalMoviesIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Filmes'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<AnnouncementIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Not??cias'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<LiveTvIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Ao vivo'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<YouTubeIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Destaque'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<MovieIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'V??deo em 360??'} />
                                </ListItem>
                                <Divider />
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Procurar canais'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon> <SettingsIcon /> </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Configura????es'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon> <FlagIcon /> </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Hist??rico de den??ncias'} />
                                </ListItem>

                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon> <HelpIcon /> </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Ajuda'} />
                                </ListItem>


                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon> <FeedbackIcon /> </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText
                                        }}
                                        primary={'Enviar Feedback'} />
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                </Hidden>

                <Box p={3}>
                    <Toolbar />
                    <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600 }}>
                        Recomendados
                    </Typography>

                    <Grid container spacing={2}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} ??? ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>


        </div>
    )
}
export default Home;

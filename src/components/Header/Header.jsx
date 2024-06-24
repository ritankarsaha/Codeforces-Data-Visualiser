import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    header: {
        background: 'rgba(44, 44, 44, 0.9)',
        padding: '0 20px',
    },
    btn: {
        color: 'white',
        marginRight: 16,
    },
    navLink: {
        textDecoration: 'none',
    },
    githubLink: {
        color: 'white',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    githubIcon: {
        marginRight: 8,
    },
    creatorText: {
        marginLeft: 16,
        fontStyle: 'italic',
        fontSize: '0.9rem',
        color: '#ccc',
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Codeforces Visualizer
                    <span className={classes.creatorText}>created by Ritankar Saha@2024</span>
                </Typography>
                
                <Link to="/" className={classes.navLink}>
                    <Button color="inherit" className={classes.btn}>
                        <PersonIcon />
                        Single User
                    </Button>
                </Link>

                <Link to="/compare" className={classes.navLink}>
                    <Button color="inherit" className={classes.btn}>
                        <PeopleIcon />
                        Compare
                    </Button>
                </Link>

                <a 
                    href="https://github.com/ritankarsaha" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={classes.githubLink}
                >
                    <GitHubIcon className={classes.githubIcon} />
                    <Typography variant="body1">Source Code</Typography>
                </a>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

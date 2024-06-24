import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles({
  footer: {
    background: 'rgba(44, 44, 44, 0.9)',
    padding: '1px 0',
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0, 
    zIndex: 1000, 
  },
  icon: {
    margin: '0 10px',
    color: 'white',
  },
  text: {
    color: 'white',
    marginTop: '10px',
  },
  contentWrapper: {
    paddingBottom: '60px', 
    minHeight: '100vh', 
    position: 'relative', 
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.contentWrapper}>
        {/* Your main content goes here */}
      </div>
      <footer className={classes.footer}>
        <div>
          <IconButton component={Link} href="https://www.linkedin.com/in/ritankar-saha-8041b9289/" target="_blank" className={classes.icon}>
            <LinkedInIcon />
          </IconButton>
          <IconButton component={Link} href="mailto:ritankar.saha786@gmail.com" className={classes.icon}>
            <EmailIcon />
          </IconButton>
          <IconButton component={Link} href="https://github.com/ritankarsaha" target="_blank" className={classes.icon}>
            <GitHubIcon />
          </IconButton>
          <IconButton component={Link} href="https://x.com/ritankarxx" target="_blank" className={classes.icon}>
            <TwitterIcon />
          </IconButton>
          <IconButton component={Link} href="https://www.instagram.com/ritankarxx/" target="_blank" className={classes.icon}>
            <InstagramIcon />
          </IconButton>
          <IconButton component={Link} href="https://wa.me/9732839187" target="_blank" className={classes.icon}>
            <WhatsAppIcon />
          </IconButton>
          <IconButton component={Link} href="https://discord.com/ritankarxx" target="_blank" className={classes.icon}>
            <ChatIcon />
          </IconButton>
        </div>
        <Typography variant="body2" className={classes.text}>
          Contact-1 - 9732839187 | Contact-2 - 9147056833
        </Typography>
      </footer>
    </>
  );
};

export default Footer;

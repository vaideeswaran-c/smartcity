import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import clsx from 'clsx';
import { Link } from "react-router-dom";

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
    textDecoration: 'none'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
    height: '64px'
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    textDecoration: 'none'
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
    textDecoration: 'none'
  },
});

function AppAppBar(props) {
  const { classes } = props;

  let isLoggedIn = localStorage.getItem("isLoggedIn");
  let name = localStorage.getItem("name");
  let role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    isLoggedIn = "false";
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link to="/" className={classes.title}            
            variant="h6"
            underline="none"
            color="inherit" >
            {'LOS ANGELES'}
          </Link>
          <div className={classes.right}>
          {isLoggedIn && isLoggedIn === "true" ? <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
            >
              {`${name}`}
            </Link> : <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/signin"
            >
              {'Sign In'}
            </Link>}
            {isLoggedIn && isLoggedIn === "true" ? <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              onClick={handleLogout}
            >
              {'Sign Out'}
            </Link> : <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              to="/signup"
            >
              {'Sign Up'}
            </Link>}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

export default withStyles(styles)(AppAppBar);

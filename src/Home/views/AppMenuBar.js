import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import {
  Link as LinkR
} from "react-router-dom";
const styles = (theme) => ({
  title: {
    fontSize: 24,
    textDecoration: 'none'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
    height: '64px'
  },
  margin: {
    marginTop: '64px'
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
    justifyContent: 'center',
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
  const pathname = window.location.pathname.split('/')[1];

  return (
    <div>
      <AppBar position="fixed" className={classes.margin}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.right}>
            <LinkR to="/"
              color="inherit"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, pathname==="" && classes.linkSecondary)}
            >
              {'Home'}
            </LinkR>
            <LinkR to="/newsboard"
              color="inherit"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, pathname==="newsboard" && classes.linkSecondary)}
            >
              {'News Board'}
            </LinkR>
            <LinkR to="/jobboard"
              color="inherit"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, pathname==="jobboard" && classes.linkSecondary)}
            >
              {'Job board'}
            </LinkR>
            <LinkR to="/tourists"
              color="inherit"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, pathname==="tourists" && classes.linkSecondary)}
            >
              {'Tourist Destinations'}
            </LinkR>
            <LinkR to="/hotelsandtaxis"
              color="inherit"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, pathname==="hotelsandtaxis" && classes.linkSecondary)}
            >
              {'Hotels'}
            </LinkR>
            <LinkR to="/wastecalculation"
              color="inherit"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, pathname==="wastecalculation" && classes.linkSecondary)}
            >
              {'Waste Calculation'}
            </LinkR>
            <LinkR to="/energycalculation"
              color="inherit"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, pathname==="energycalculation" && classes.linkSecondary)}
            >
              {'Energy Calculation'}
            </LinkR>       
            <LinkR to="/about"
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, pathname==="about" && classes.linkSecondary)}
            >
              {'About'}
            </LinkR>   
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);

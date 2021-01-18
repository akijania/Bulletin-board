import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { faCandyCane, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({ className, user }) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static" className={styles.topBar}>
      <Toolbar className={styles.toolbar}>
        <Link to="/">
          <FontAwesomeIcon icon={faCandyCane} className={styles.icon}>
            Bulletin-board
          </FontAwesomeIcon>
        </Link>
        <div>
          {user.active === true ? (
            <div className={styles.logout}>
              <Button className={styles.button}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className={styles.icon}
                ></FontAwesomeIcon>
              </Button>
              <Button className={styles.button}>Logout</Button>
            </div>
          ) : (
            <div className={styles.login}>
              <Button href="https://google.com" className={styles.button}>
                Login
              </Button>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Header,
  Component as HeaderComponent,
};

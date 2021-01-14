import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import styles from './NotFound.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <p>404-not found</p>
    <Link exact to="/">
      Home Page
    </Link>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as NotFound, Component as NotFoundComponent };

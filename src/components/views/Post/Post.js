import React from 'react';
import PropTypes from 'prop-types';
import { getPostById } from '../../../redux/postsRedux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const Component = ({ className, posts }) => (
  <div className={clsx(className, styles.root)}>
    <Card>
      <CardContent>
        <div className={styles.image}>
          <img src={posts.image} alt={posts.alt}></img>
        </div>
        <h1>{posts.title}</h1>
        <p>{posts.description}</p>
      </CardContent>
    </Card>
  </div>
);

Component.propTypes = {
  posts: PropTypes.object,
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  const posts = getPostById(state, props.match.params.id);
  return {
    posts,
  };
};

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};

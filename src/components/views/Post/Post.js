import React from 'react';
import PropTypes from 'prop-types';
import { getPostById } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

const Component = ({ className, posts, user }) => (
  <div className={clsx(className, styles.root)}>
    <Card>
      <CardContent>
        <div className={styles.image}>
          <img src={posts.image} alt={posts.alt}></img>
        </div>
        <div className={styles.content}>
          <Grid container justify="space-between">
            <p>date: {posts.date}</p>
            <p>location: {posts.location}</p>
          </Grid>
          <h1>{posts.title}</h1> 
          <p>{posts.description}</p>
          <h4>price {posts.price} PLN</h4>
          <Grid container justify="space-between">
            <p>update: {posts.update}</p>
            <p>*</p>
            <p>e-mail: {posts.email} </p>
            <p>*</p>
            <p>phone: {posts.phone}</p>
          </Grid>
          <Grid container justify="space-between">
            <Button>{posts.status}</Button>
            { user.active === true &&
            <Link to={`/post/${posts.id}/edit`} className={styles.button}>
              <Button variant="contained" color="primary">
  Edit post
              </Button>
            </Link>
            }
          </Grid>
        </div>
       
      </CardContent>
    </Card>
  </div>
);

Component.propTypes = {
  posts: PropTypes.array,
  user: PropTypes.object,
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => {
  const posts = getPostById(state, props.match.params.id);
  return {
    posts,
    user: state.user,
  };
};

const Container = connect(mapStateToProps)(Component);

export {
  Container as Post,
  Component as PostComponent,
};

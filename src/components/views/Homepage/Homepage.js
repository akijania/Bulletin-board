import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import { getAll } from '../../../redux/postsRedux';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({ className, posts }) => (
  <div className={clsx(className, styles.root)}>
    <Link to="/post/add" className={styles.button}>
      <Button variant="contained" color="default">
        Add new post
      </Button>
    </Link>
    {posts.map((item) => (
      <div key={item.id} className={styles.post}>
        <Card>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div className={styles.image}>
                <img src={item.image} alt={item.alt}></img>
              </div>
            </Grid>
            <Grid item xs={8}>
              <CardContent>
                <Link to={`/post/${item.id}`} className={styles.button}>
                  <h2>{item.title}</h2>
                </Link>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
    ))}
  </div>
);

Component.propTypes = {
  posts: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};

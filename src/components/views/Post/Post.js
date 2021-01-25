import React from 'react';
import PropTypes from 'prop-types';
import { getPostById, fetchPost } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import { connect } from 'react-redux';

import styles from './Post.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchPost } = this.props;
    fetchPost();
  }

  render() {
    const { className, post, user } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <Card>
          <CardContent>
            <div className={styles.image}>
              <img src={post.photo} alt={post.alt}></img>
            </div>
            <div className={styles.content}>
              <Grid container justify="space-between">
                <p>date: {post.created}</p>
                <p>location: {post.location}</p>
              </Grid>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
              <h4>price {post.price} PLN</h4>
              <Grid container justify="space-between">
                <p>update: {post.updated}</p>
                <p>*</p>
                <p>e-mail: {post.author} </p>
                <p>*</p>
                <p>phone: {post.phone}</p>
              </Grid>
              <Grid container justify="space-between">
                <Button>status: {post.status}</Button>
                {user.active === true && (
                  <Link to={`/post/${post._id}/edit`} className={styles.button}>
                    <Button variant="contained" color="primary">
                      Edit post
                    </Button>
                  </Link>
                )}
              </Grid>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Component.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object.isRequired,
  className: PropTypes.string,
  fetchPost: PropTypes.func,
};

const mapStateToProps = (state) => ({
  post: getPostById(state),
  user: state.user,
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPost: () => dispatch(fetchPost(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Post, Component as PostComponent };

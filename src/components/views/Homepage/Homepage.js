import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllPublished, fetchPublished } from '../../../redux/postsRedux';

import styles from './Homepage.module.scss';

class Component extends React.Component {
  
  componentDidMount() {
    const { fetchPublishedPosts } = this.props;
    fetchPublishedPosts();
  }

  render() {
    const { className, posts, user } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        {user.active === true && (
          <Link to="/post/add" className={styles.button}>
            <Button variant="contained" color="default">
              Add new post
            </Button>
          </Link>
        )}
        {posts.map((item) => (
          <div key={item._id} className={styles.post}>
            <Card>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <div className={styles.image}>
                    {item.photo && <img src={item.photo} alt={item.title}></img>}
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
  }
}

Component.propTypes = {
  posts: PropTypes.array,
  user: PropTypes.object,
  className: PropTypes.string,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: getAllPublished(state),
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as Homepage, Component as HomepageComponent };

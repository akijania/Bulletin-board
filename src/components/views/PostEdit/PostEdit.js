import React from 'react';
import PropTypes from 'prop-types';
import { NotFound } from '../../views/NotFound/NotFound';
import { getPostById } from '../../../redux/postsRedux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import { connect } from 'react-redux';

import styles from './PostEdit.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class Component extends React.Component {
  render() {
    const { className, user, posts } = this.props;
    if (!user.active) return <NotFound />;
    else
      return (
        <div className={clsx(className, styles.root)}>
          <form>
            <Card className={styles.card}>
              <CardContent className={styles.content}>
                <h2>Add title and description</h2>
                <label>Title</label>
                <TextField
                  required
                  id="filled-full-width"
                  label={posts.title}
                  variant="filled"
                  margin="none"
                  fullWidth
                  helperText="max 10 characters"
                  className={styles.field}
                />
                <label>Description</label>
                <TextField
                  required
                  id="filled-full-width"
                  label={posts.description}
                  variant="filled"
                  margin="none"
                  fullWidth
                  helperText="max 20 characters"
                  className={styles.field}
                />
                <label>Price</label>
                <TextField
                  id="filled-full-width"
                  type="number"
                  label={posts.price}
                  variant="filled"
                  margin="none"
                  fullWidth
                  helperText="PLN"
                  className={styles.field}
                />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardContent className={styles.contentPhoto}>
                <h2>Change photo</h2>
                <label className={styles.file}>
                  <img src={posts.image} alt={posts.title}></img>
                  <FontAwesomeIcon
                    icon={faCamera}
                    className={styles.icon}
                  ></FontAwesomeIcon>
                  <input type="file"></input>
                </label>
                <p>Choose file</p>
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardContent className={styles.content}>
                <h2>Your contact details</h2>
                <label>E-mail address</label>
                <TextField
                  required
                  id="filled-full-width"
                  type="email"
                  label={posts.email}
                  variant="filled"
                  margin="none"
                  fullWidth
                  className={styles.field}
                />
                <label>Location</label>
                <TextField
                  id="filled-full-width"
                  label={posts.location}
                  variant="filled"
                  margin="none"
                  fullWidth
                  className={styles.field}
                />
                <label>Phone number</label>
                <TextField
                  id="filled-full-width"
                  type="number"
                  label={posts.phone}
                  variant="filled"
                  margin="none"
                  fullWidth
                  className={styles.field}
                />
              </CardContent>
            </Card>
            <Button
              type="submit"
              variant="contained"
              className={styles.button}
              color="primary"
            >
              Edit post
            </Button>
          </form>
        </div>
      );
  }
}

Component.propTypes = {
  posts: PropTypes.object,
  className: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  const posts = getPostById(state, props.match.params.id);
  return {
    posts,
    user: state.user,
  };
};

const Container = connect(mapStateToProps)(Component);

export { Container as PostEdit, Component as PostEditComponent };

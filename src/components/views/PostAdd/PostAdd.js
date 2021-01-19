import React from 'react';
import PropTypes from 'prop-types';
import { NotFound } from '../../views/NotFound/NotFound';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

import { connect } from 'react-redux';
// import { addPostRequest } from '../../../redux/postsRedux';

import styles from './PostAdd.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class Component extends React.Component {
  state = {
    post: {
      title: '',
      description: '',
      price: '',
      image: null,
      email: '',
      location: '',
      phone: '',
    },
  };
  updateTextField = ({ target }) => {
    const { post } = this.state;
    const { value, name } = target;

    this.setState({ post: { ...post, [name]: value } });
  };

  updateNumberField = ({ target }) => {
    const { post } = this.state;
    const { value, name } = target;

    this.setState({ post: { ...post, [name]: parseInt(value) } });
  };
  setPhoto = (files) => {
    const { post } = this.state;

    if (files) this.setState({ post: { ...post, image: files[0] } });
    else this.setState({ post: { ...post, image: null } });
  };

  submitForm = async (e) => {
    const { post } = this.state;
    // const { addPost } = this.props;

    e.preventDefault();

    if (post.title && post.description && post.email) {
      // addPost(post);
      this.setState({
        post: {
          title: '',
          description: '',
          price: '',
          image: '',
          email: '',
          location: '',
          phone: '',
        },
      });
    } else {
      alert('Please fill in required fields');
    }
  };

  render() {
    const { updateTextField, updateNumberField, submitForm, setPhoto } = this;
    const { className, user } = this.props;
    const { post } = this.state;
    if (!user.active) return <NotFound />;
    else
      return (
        <div className={clsx(className, styles.root)}>
          <form onSubmit={submitForm}>
            <Card className={styles.card}>
              <CardContent className={styles.content}>
                <h2>Add title and description</h2>
                <TextField
                  required
                  value={post.title}
                  name="title"
                  onChange={updateTextField}
                  id="filled-full-width"
                  label="Title"
                  variant="filled"
                  margin="normal"
                  fullWidth
                  helperText="max 10 characters"
                />
                <TextField
                  required
                  value={post.description}
                  name="description"
                  onChange={updateTextField}
                  id="filled-full-width"
                  label="Description"
                  variant="filled"
                  margin="normal"
                  fullWidth
                  helperText="max 20 characters"
                />
                <TextField
                  value={post.price}
                  name="price"
                  onChange={updateNumberField}
                  id="filled-full-width"
                  type="number"
                  label="Price"
                  variant="filled"
                  margin="normal"
                  fullWidth
                  helperText="PLN"
                />
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardContent className={styles.contentPhoto}>
                <h2>Add photo</h2>
                <label className={styles.file}>
                  <FontAwesomeIcon
                    icon={faCamera}
                    className={styles.icon}
                  ></FontAwesomeIcon>
                  <input type="file" name="image" onChange={setPhoto}></input>
                </label>
                <p>Choose file</p>
              </CardContent>
            </Card>
            <Card className={styles.card}>
              <CardContent className={styles.content}>
                <h2>Your contact details</h2>
                <TextField
                  required
                  value={post.email}
                  name="email"
                  onChange={updateTextField}
                  id="filled-full-width"
                  type="email"
                  label="Email address"
                  variant="filled"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  value={post.location}
                  name="location"
                  onChange={updateTextField}
                  id="filled-full-width"
                  label="Localization"
                  variant="filled"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  value={post.phone}
                  name="phone"
                  onChange={updateNumberField}
                  id="filled-full-width"
                  type="number"
                  label="Phone number"
                  variant="filled"
                  margin="normal"
                  fullWidth
                />
              </CardContent>
            </Card>
            <Button
              type="submit"
              variant="contained"
              className={styles.button}
              color="primary"
            >
              Submit
            </Button>
          </form>
        </div>
      );
  }
}

Component.propTypes = {
  // addPost: PropTypes.func,
  className: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

// const mapDispatchToProps = dispatch => ({
//   addPost: post => dispatch(addPostRequest(post)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};

import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <form>
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <h2>Add title and description</h2>
          <TextField
            required
            id="filled-full-width"
            label="Title"
            variant="filled"
            margin="normal"
            fullWidth
            helperText="max 10 characters"
          />
          <TextField
            required
            id="filled-full-width"
            label="Description"
            variant="filled"
            margin="normal"
            fullWidth
            helperText="max 20 characters"
          />
          <TextField
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
            <input type="file"></input>
          </label>
          <p>Choose file</p>
        </CardContent>
      </Card>
      <Card className={styles.card}>
        <CardContent className={styles.content}>
          <h2>Your contact details</h2>
          <TextField
            required
            id="filled-full-width"
            type="email"
            label="Email address"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
            id="filled-full-width"
            label="Localization"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <TextField
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

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};

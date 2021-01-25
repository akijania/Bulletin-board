import Axios from 'axios';
/* selectors */
export const getAll = ({ posts }) => posts.data;
export const getAllPublished = ({ posts }) => posts.data;
export const getPostById = ({ posts }) => posts.data;

/* action name creator */
const reducerName = 'posts';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const LOAD_POSTS = createActionName('LOAD_POSTS');
const LOAD_POST = createActionName('LOAD_POST');
const ADD_POST = createActionName('ADD_POST');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const loadPosts = (payload) => ({ payload, type: LOAD_POSTS });
export const loadPost = (payload) => ({ payload, type: LOAD_POST });
export const addPost = (payload) => ({ payload, type: ADD_POST });

/* thunk creators */

export const fetchPublished = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted({ name: 'LOAD_POSTS' }));

    Axios.get('http://localhost:8000/api/posts')
      .then((res) => {
        dispatch(loadPosts(res.data));
        dispatch(fetchSuccess({ name: 'LOAD_POSTS' }));
      })
      .catch((err) => {
        dispatch(
          fetchError({ name: 'LOAD_POSTS', error: err.message || true })
        );
      });
  };
};
export const fetchPost = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted({ name: 'LOAD_POST' }));

    Axios.get(`http://localhost:8000/api/posts/${id}`)
      .then((res) => {
        dispatch(loadPost(res.data));
        dispatch(fetchSuccess({ name: 'LOAD_POST' }));
      })
      .catch((err) => {
        dispatch(fetchError({ name: 'LOAD_POST', error: err.message || true }));
      });
  };
};

export const addPostRequest = (post) => {
  return async (dispatch) => {
    dispatch(fetchStarted({ name: 'ADD_POST' }));
    try {
      let res = await Axios.post(`http://localhost:8000/api/posts`, post);
      dispatch(addPost(res.data));
      dispatch(fetchSuccess({ name: 'ADD_POST' }));
    } catch (err) {
      dispatch(fetchError({ name: 'ADD_POST', error: err.message || true }));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case LOAD_POSTS:
      return { ...statePart, data: [...action.payload] };
    case LOAD_POST:
      return { ...statePart, data: action.payload };
    case ADD_POST:
      return { ...statePart, data: [...statePart.data, action.payload] };
    case FETCH_START: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            active: true,
            error: false,
          },
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            active: false,
            error: false,
          },
          data: action.payload,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        requests: {
          ...statePart.requests,
          [action.payload.name]: {
            active: false,
            error: action.payload,
          },
        },
      };
    }
    default:
      return statePart;
  }
};

export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Lorem',
        image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      },
      {
        id: '2',
        title: 'New car',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};

export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Lorem',
        description: 'Lorem ipsum dolor',
        price: '123',
        image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        email: 'a@a.pl',
        phone: '123456789',
        update: '1.01.2021',
        date: '31.12.2020',
        location: 'Cracow',
        status: 'closed',
      },
      {
        id: '2',
        title: 'New car',
        email: 'a@a.pl',
        phone: '123456789',
        update: '1.01.2021',
        date: '31.12.2020',
        location: 'Cracow',
        status: 'draft',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    active: true,
  },
};

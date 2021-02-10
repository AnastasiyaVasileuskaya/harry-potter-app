import HomePage from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
}

export const base = () =>
  HomePage([
    {
      name: 'Harry Potter',
      gender: 'mail',
    },
    {
      name: 'Hermione Granger',
      gender: 'female',
    },
  ]).el

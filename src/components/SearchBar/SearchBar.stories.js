import SearchBar from './SearchBar'
import { action } from '@storybook/addon-actions'

export default {
  title: 'SearchBar',
  component: SearchBar,
}

export const defaultSearchBar = () => SearchBar(action('onSearch'))

import GenderFilter from './GenderFilter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'GenderFilter',
  component: GenderFilter,
}

export const defaultGenderFilter = () =>
  GenderFilter(action('onFilterByGender'))

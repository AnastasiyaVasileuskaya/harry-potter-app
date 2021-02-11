import HouseFilter from './HouseFilter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'HouseFilter',
  component: HouseFilter,
}

export const defaultHouseFilter = () => HouseFilter(action('onFilterByHouse'))

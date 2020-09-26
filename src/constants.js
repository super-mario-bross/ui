export const filterOptions = [
  {
    value: 'created_at',
    name: 'Created At'
  },
  {
    value: 'is_helpful',
    name: 'Is Helpful'
  },
  {
    value: 'is_not_helpful',
    name: 'Is Helpful'
  },
  {
    value: 'created_at',
    name: 'Created At'
  },
  {
    value: 'rating',
    name: 'rating'
  }
];

export const filterDisplayValues  = ['Highest to lowest ratings', 'Lowest to highest ratings', 'Most recent', 'Least recent','Most helpful'];

export const filterValues = [
  { name: 'Highest to lowest ratings', sort_order: 'DESC', sort_key: filterOptions[4].value }, // DESC rating
  { name: 'Lowest to highest ratings', sort_order: 'ASC', sort_key: filterOptions[4].value }, // ASC rating
  { name: 'Least recent', sort_order: 'ASC', sort_key: filterOptions[0].value}, // ASC created_at
  { name: 'Most recent', sort_order: 'DESC', sort_key: filterOptions[0].value }, // DESC created_at
  { name: 'Most helpful', sort_order: 'DESC', sort_key: filterOptions[1].value }, // DESC is_helpful
  { name: 'Least helpful', sort_order: 'ASC', sort_key: filterOptions[1].value } // DESC is_helpful
];
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
  },
  {
    value: '5',
    name: '5 stars'
  },
  {
    value: '4',
    name: '4 stars'
  },
  {
    value: '3',
    name: '3 stars'
  },
  {
    value: '2',
    name: '2 stars'
  },
  {
    value: '1',
    name: '1 stars'
  }
];

export const filterDisplayValues  = ['Highest to lowest ratings', 'Lowest to highest ratings', 'Most recent', 'Least recent','Most helpful',"5 stars", "4 stars","3 stars","2 stars","1 stars"];

export const filterValues = [
  { name: 'Highest to lowest ratings', sort_order: 'DESC', sort_key: filterOptions[4].value }, // DESC rating
  { name: 'Lowest to highest ratings', sort_order: 'ASC', sort_key: filterOptions[4].value }, // ASC rating
  { name: 'Least recent', sort_order: 'ASC', sort_key: filterOptions[0].value}, // ASC created_at
  { name: 'Most recent', sort_order: 'DESC', sort_key: filterOptions[0].value }, // DESC created_at
  { name: 'Most helpful', sort_order: 'DESC', sort_key: filterOptions[1].value }, // DESC is_helpful
  { name: 'Least helpful', sort_order: 'ASC', sort_key: filterOptions[1].value }, // DESC is_helpful
  { name: '5 stars', sort_order: 'DESC', sort_key: filterOptions[0].value, filterByRating: filterOptions[5].value }, // fetch 5 stars ratings
  { name: '4 stars', sort_order: 'DESC', sort_key: filterOptions[0].value, filterByRating: filterOptions[6].value  }, // fetch 4 stars ratings
  { name: '3 stars', sort_order: 'DESC', sort_key: filterOptions[0].value , filterByRating: filterOptions[7].value }, // fetch 3 stars ratings
  { name: '2 stars', sort_order: 'DESC', sort_key: filterOptions[0].value , filterByRating: filterOptions[8].value }, // fetch 2 stars ratings
  { name: '1 stars', sort_order: 'DESC', sort_key: filterOptions[0].value , filterByRating: filterOptions[9].value } // fetch stars ratings

];
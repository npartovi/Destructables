export const search = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/searches',
    data: { search: {query} }
  })
);
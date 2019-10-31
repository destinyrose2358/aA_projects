// $.ajaxSetup({
//   headers: {
//     'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
//   }
// });

export const fetchBenches = () => (
  $.ajax({
    url: '/api/benches',
    error: (err) => console.log(err)
  })
)

// export const login = user => (
//   $.ajax({
//     url: '/api/session',
//     method: 'POST',
//     data: { user },
//   })
// )

// export const logout = () => (
//   $.ajax({
//     url: '/api/session',
//     method: 'DELETE',
//   })
// )
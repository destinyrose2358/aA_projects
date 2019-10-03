var AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');

$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

export const signup = user => (
  $.ajax({
    url: '/api/users' + "?&authenticity_token=" + AUTH_TOKEN,
    method: 'POST',
    data: { user },
  })
)

export const login = user => (
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },
  })
)

export const logout = () => (
  $.ajax({
    url: '/api/session',
    method: 'DELETE',
  })
)
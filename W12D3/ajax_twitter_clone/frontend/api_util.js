const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`,
      dataType: "json"
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "json"
    });
  },

  searchUsers: queryVal => {
    return $.ajax({
      method: "GET",
      url: "/users/search",
      dataType: "json",
      data: { query: queryVal }
    });
  },

  createTweet: data => {
    return $.ajax({
      method: "POST",
      url: "/tweets",
      dataType: "json",
      data: data
    });
  },

  error: () => console.log("error")
}

module.exports = APIUtil;
const APIUtil = require("./api_util");
const FollowToggle = require("./follow_toggle");

class UsersSearch {
  constructor(nav) {
    this.$nav = $(nav);
    this.$input = this.$nav.find("input");
    this.$ul = this.$nav.find("ul.users");
    this.$input.on("input", (event) => this.handleInput(event));
  }

  handleInput(event) {
    APIUtil.searchUsers(this.$input.val())
      .then((results) => this.renderResults(results), APIUtil.error);
  }

  renderResults(results) {
    this.$ul.empty();
    results.forEach(user => {
      let $user = $("<li>").append($("<a>").attr("href", `/users/${user.id}`).text(`${user.username}`));
      let $followButton = $("<button>")
        .addClass("follow-toggle");
      new FollowToggle($followButton, {
        userId: user.id,
        followState: user.followed ? "followed" : "unfollowed"
      });
      $user.append($followButton);
      $user.appendTo(this.$ul);
    });
  }
}

module.exports = UsersSearch;
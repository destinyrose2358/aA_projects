const APIUtil = require("./api_util");

class FollowToggle {
  constructor(button, options) {
    this.$followButton = $(button);
    this.userId = this.$followButton.data("user-id") || options.userId;
    this.followState = this.$followButton.data("initial-follow-state") || options.followState;
    this.render();
    this.$followButton.on("click", (event) => { this.handleClick(event) });
  }

  handleClick(event) {
    event.preventDefault();
    
    let followPromise;
    if (this.followState === "unfollowed") {
      this.followState = "following";
      followPromise = APIUtil.followUser(this.userId)
        .then(() => this.followState = "followed");
    } else if (this.followState === "followed") {
      this.followState = "unfollowing";
      followPromise = APIUtil.unfollowUser(this.userId)
        .then(() => this.followState = "unfollowed");
    }

    followPromise
      .then(() => {this.render()})
      .fail(APIUtil.error);

    this.render();
  }

  render() {
    this.$followButton.prop("disabled", false);
    if (this.followState === "unfollowed") {
      this.$followButton.text("Follow!");
    } else if (this.followState === "followed") {
      this.$followButton.text("Unfollow!");
    } else if (this.followState === "following" || this.followState === "unfollowing") {
      this.$followButton.prop("disabled", true);
    }
  }
}

module.exports = FollowToggle;
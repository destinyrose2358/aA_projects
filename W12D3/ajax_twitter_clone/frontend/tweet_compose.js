const APIUtil = require("./api_util");

class TweetCompose {
  constructor(form) {
    this.$form = $(form);
    this.$form.on("submit", (event) => { this.submit(event) });
  }

  submit(event) {
    event.preventDefault();
    let data = this.$form.serializeJSON();
    APIUtil.createTweet(data)
      .then((tweet) => { this.handleSuccess(tweet) }, APIUtil.error);
  }

  handleSuccess(tweet) {
    
  }
}

module.exports = TweetCompose;
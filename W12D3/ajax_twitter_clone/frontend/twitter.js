const FollowToggle = require("./follow_toggle");
const UsersSearch = require("./users_search");

$(() => {
  $("button.follow-toggle").each((_, button) => new FollowToggle(button));
  $("nav.users-search").each((_, nav) => new UsersSearch(nav));
});
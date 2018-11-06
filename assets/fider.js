$(document).ready(function() {
  $("#site-burger").click(function() {
    $("#site-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  $("#sidebar-burger").click(function() {
    $("#sidebar-burger").toggleClass("is-active");
    $(".sidebar").toggleClass("is-active");
  });
});
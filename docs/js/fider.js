/* Burguer Menu */
document.addEventListener("DOMContentLoaded", function() {
  var toggle = document.getElementById("nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function() {
      var targetId = toggle.attributes.getNamedItem("data-target").value;
      var target = document.getElementById(targetId);
      if (target) {
        target.className = (target.className === 'hide-sm') ? '' : 'hide-sm';
      }
    });
  }
});
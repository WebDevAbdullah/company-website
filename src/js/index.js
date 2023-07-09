window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "../css/style.css";
import "../sass/style.scss";
import "jquery";

$(function () {
  $(".thumbnail").hover(
    function () {
      $(this).find(".project-category").hide();
      $(this).find(".caption").slideDown(250);
    },

    function () {
      $(this).find(".caption").slideUp(250);
      $(this).find(".project-category").show();
    }
  );
});

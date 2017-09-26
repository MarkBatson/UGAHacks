var expandButton = document.getElementById("expand");

expandButton.addEventListener("click", more);

function more() {
  if (expandButton.textContent == "SEE MORE") {
    expandButton.textContent = "SEE LESS";
    document.getElementById("more-FAQ").style.display = "inherit";
    document.getElementById("line").style.top = 4035;
  }
  else {
    expandButton.textContent = "SEE MORE";
    document.getElementById("more-FAQ").style.display = "none";
    document.getElementById("line").style.top = 2927;
  }
}

var headerId;
function reply_click(clicked_id) {
  headerId = clicked_id;

  if (headerId == 0) {
    window.scrollTo(0, 0);
  }
  else if (headerId == 1) {
    window.scrollTo(0, 1600);
  }
  else if (headerId == 2) {
    window.scrollTo(0, 2250);
  }
  else if (headerId == 3) {
    window.scrollTo(0, 3000);
  }
}

window.onscroll = function() {changes()};
var y;
function changes() {
  y = window.scrollY;
  if (y > 50)
    document.getElementById("header").style.boxShadow = "0px 3px 5px lightgrey";
  else
  document.getElementById("header").style.boxShadow = "inherit";

  if (y < 1300) {
    document.getElementById("header-line").style.left = "45px";
    document.getElementById("header-line").style.width = "75px";
  }

  if (y > 1300) {
    document.getElementById("header-line").style.left = "182px";
    document.getElementById("header-line").style.width = "115px";
  }

  if (y > 2000) {
    document.getElementById("header-line").style.left = "357px";
    document.getElementById("header-line").style.width = "44px";
  }

  if (y > 2500) {
    document.getElementById("header-line").style.left = "460px";
    document.getElementById("header-line").style.width = "125px";
  }
}

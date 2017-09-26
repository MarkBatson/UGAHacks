var expandButton = document.getElementsByClassName("FAQ-button");
var buttonNumber;

function reply_click(clicked_id) {
  buttonNumber = clicked_id;

  if (expandButton[buttonNumber].textContent == "+") {
    expandButton[buttonNumber].textContent = "-";
    document.getElementsByClassName("answer")[buttonNumber].style.display = "inherit";
  }
  else {
    expandButton[buttonNumber].textContent = "+";
    document.getElementsByClassName("answer")[buttonNumber].style.display = "none";
  }
}

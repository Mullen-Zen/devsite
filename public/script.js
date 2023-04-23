document.getElementById('tiresult').hidden = true;

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

var keySequence = "";

document.onkeydown = function(event) {
  keySequence += event.key;
  if (keySequence != "h" && keySequence != "he" && keySequence != "hel" && keySequence != "help") {
    keySequence = "";
  } else if (keySequence == "help") {
    document.getElementById('tiresult').hidden = false;
  }
}
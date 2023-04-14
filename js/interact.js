function startUp() {
  var button = document.getElementById("content");
  button.addEventListener("click", changeContent);

  function changeContent() {
    var phrase = document.querySelector(".phrase");
    var words = document.querySelector(".words");
    phrase.style.backgroundColor = "red";
    phrase.style.borderColor = "blue";
    words.style.fontSize = "30px";
    words.style.color = "yellow";
  }
}

window.addEventListener("load", startUp);

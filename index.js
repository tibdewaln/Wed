$(document).on("click", function () {
  document.getElementById("my_audio").play();
  console.log("Hey");
});

function off() {
  document.getElementById("overlay").style.height = "0%";
  document.getElementById("ganesha").style.height = "0%";

  document.getElementById("main").style.display = "block";
  document.getElementById("main").style.height = "100%";
}

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

img.onclick = function(){
  modal.style.display = "block";
  modal.style.justifyContent = "space-between";
  modal.style.alignItems = "center";
  modalImg.src = this.src;
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
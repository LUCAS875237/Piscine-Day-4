window.onload = function(){
  window.addEventListener = ("resize", function(){
  alert("Size matters");

}
)
let picture = document.querySelector("img")
if (picture) {
    picture.addEventListener("mouseover", function(){
    alert("Pretty, isn't it?")}
)
}
}

const darkIcon = document.getElementById("icon-dark");
const lisghting = document.querySelector(".lighting");
const name = document.querySelector(".name");
const anchors = document.querySelectorAll("a");
let dark = false;
darkIcon.addEventListener("click", function () {
  if (dark === false) {
    dark = true;
    darkIcon.classList.remove("fa-moon");
    darkIcon.classList.add("fa-sun");
    darkIcon.style.color = "white";
    lisghting.style.backgroundColor = "black";
    document.body.style.cssText =
      " margin: 0; border: 12px solid white; background-color:black";
    name.style.color = "white";
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].style.backgroundColor = "black";
      anchors[i].style.border = "2px solid white";
      anchors[i].style.color = "white";
    }
  } else {
    dark = false;
    darkIcon.classList.remove("fa-sun");
    darkIcon.classList.add("fa-moon");
    darkIcon.style.color = "black";
    lisghting.style.backgroundColor = "white";
    document.body.style.cssText =
      " margin: 0; border: 12px solid black; background-color:white";
    name.style.color = "black";
    for (let i = 0; i < anchors.length; i++) {
      anchors[i].style.backgroundColor = "white";
      anchors[i].style.border = "2px solid black";
      anchors[i].style.color = "black";
    }
  }
});
console.log(darkIcon);

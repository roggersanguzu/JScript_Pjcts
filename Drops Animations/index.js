var container = document.querySelector(".container");
function dropped() {
  var drop = document.createElement("span");

  drop.classList.add("drop");
  drop.style.top = Math.random() * innerHeight + "px";
  drop.style.left = Math.random() * innerHeight + "px";

  setTimeout(() => {
    drop.remove();
  }, 6500);
  container.append(drop);
}
setInterval(dropped, 500);

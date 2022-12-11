document.querySelector("#btn").onclick = function () {
  document.querySelector("#btn").style.display = "none";
  document.querySelector(".christmas").style.display = "block";
  document.querySelector("#body").style.background = "#de2f32";
};
// window.onload = function () {
//   document.getElementById("autoplay").play();
// };
window.onload = function () {
  document.getElementById("body").addEventListener("click", () => {
    document.getElementById("autoplay").play();
  });
};

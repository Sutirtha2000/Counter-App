const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

let val = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const v = e.currentTarget.classList;
    let color = null;

    if (v.contains("decrease")) {
      val--;
    } else if (v.contains("reset")) {
      val = 0;
    } else if (v.contains("increase")) {
      val++;
    }

    if (val > 0) {
      color = "green";
    } else if (val === 0) {
      color = "black";
    } else {
      color = "red";
    }

    value.innerText = val;
    value.style.color = color;
  });
});

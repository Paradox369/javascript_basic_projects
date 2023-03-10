let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// produces a nodelist of btns, which is an array
console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) count++;
    else if (styles.contains("decrease")) count--;
    else count = 0;

    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
    if (count === 0) value.style.color = "black";

    value.textContent = count;
  });
});

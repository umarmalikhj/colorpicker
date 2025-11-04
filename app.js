let cyan = document.getElementById("cyan");
let purple = document.getElementById("purple");
let lime = document.getElementById("lime");
let olive = document.getElementById("olive");
let fuchsia = document.getElementById("fuchsia");
let heading = document.getElementById("heading");

cyan.addEventListener("click", function () {
    colorPicker(this, "cyan");
});

purple.addEventListener("click", function () {
    colorPicker(this, "purple");
});

lime.addEventListener("click", function () {
    colorPicker(this, "lime");
});

olive.addEventListener("click", function () {
    colorPicker(this, "olive");
});

fuchsia.addEventListener("click", function () {
    colorPicker(this, "fuchsia");
});

function colorPicker(button, type) {
    document.querySelectorAll(".colorBtn button").forEach(btn => {
        btn.style.border = "2px solid white";
        btn.style.color = "white";
        btn.style.transition = "0.75s";
    });

    const selectedColor = type;
    heading.style.color = selectedColor;
    heading.style.transition = "0.75s";
    button.style.color = selectedColor;
    button.style.transition = "0.75s";
    button.style.border = `2px solid ${selectedColor}`;
};
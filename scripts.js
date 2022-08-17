

btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector("#Nome");

    const value = name.value;

    console.log(value);
})
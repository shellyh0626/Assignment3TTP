// 1) Select the section with an id of container without using querySelector.
const ctx1 = document.getElementById("container")
ctx1.innerHTML = "Hello";

// 2) Select the section with an id of container using querySelector.
const ctx2 = document.querySelector("#container");
ctx2.innerHTML = "Hello World!";

// 3) Select all of the list items with a class of "second".
const ctx3 = document.getElementsByClassName("second");
for (let i = 0; i < ctx3.length; i++) {
    ctx3[i].style.color = "darkgreen";
}

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
//Fix this
const ctx4 = document.getElementsByTagName("ol");
for (let i = 0; i < ctx4.length; i++) {
    ctx4[i].style.color = "lightblue";
}

// 5) Give the section with an id of container the text "Hello!".
const ctx5 = document.getElementById("container");
ctx5.style.fontSize = "small";

// 6) Add the class main to the div with a class of footer.
//这个是在footer attribute里面弄的，还是放在div里面？
const ctx6 = document.getElementByID("footer").classList.add("container");

// 7) Remove the class main on the div with a class of footer.
const ctx7 = document.getElementByID("footer").classList.remove("container");

// 8) Create a new li element.
const ctx8 = document.createElement("li");

// 9) Give the li the text "four".
const ctx9 = ctx8.textContent("four");

// 10) Append the li to the ul element.
const ctx10 = document.getElementById("ul").append(ctx8);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const ctx11 = document.querySelectorAll("ol li");
for (let i = 0; i < ctx10.length; i++) {
    ctx10[i].style.backgroundColor = "green";
}

// 13) Remove the div with a class of footer.
const ctx12 = document.querySelector(".footer");
ctx12.remove();


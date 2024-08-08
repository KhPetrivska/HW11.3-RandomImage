"use strict";

const image = document.createElement("img");
const imageNum = parseInt(Math.random() * 10) + 1;
image.style.height = "100vh";

image.src = `/img/${imageNum}.jpg`;
document.body.append(image);

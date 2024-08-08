"use strict";

const image = document.querySelector("img");
const imageNum = Math.floor(Math.random() * 10) + 1;
console.log(imageNum)

image.src = `/img/${imageNum}.jpg`;
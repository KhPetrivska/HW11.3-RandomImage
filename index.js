"use strict";

const image = document.querySelector("img");
const imageNum = Math.floor(Math.random() * 9) + 1;

image.src = `/img/${imageNum}.jpg`;
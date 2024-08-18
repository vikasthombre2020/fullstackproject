"use strict";
window.onload = firstFunction;

function firstFunction(){
    var x = 15;
    console.log("firstFunction: x =", x);
}

function secondFunction(){
    console.log("secondFunction(before declaration): x =", x);
    var x = 20.0;
    console.log("secondFunction(after declaration): x =", x);

}

secondFunction();
//  Caeser Decoder

const inputText = document.body.querySelector("#input_text");
const inputKey = document.body.querySelector("#input_key");
const output = document.body.querySelector("#output");
const btn1 = document.body.querySelector("#encoder");
const btn2 = document.body.querySelector("#decoder");

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const encoder = () => {
    
    output.textContent = "";
    
    const textArr = inputText.value.split("");
    const charArr = alphabet.split("");

    for (let char of textArr) {

        for (let i = 0; i <= charArr.length; i++) {

            if (char.toLowerCase() === charArr[i]) {

                output.textContent += charArr[i - Number(inputKey.value)].toUpperCase();

            }
        }
    }
};

const decoder = () => {

    output.textContent = "";

    const textArr = inputText.value.split("");
    const charArr = alphabet.split("");

    for (let char of textArr) {

        for (let i = 0; i <= charArr.length; i++) {

            if (char.toLowerCase() === charArr[i]) {

                output.textContent += charArr[i + Number(inputKey.value)].toUpperCase();

            }
        }
    }
};

btn1.addEventListener("click", encoder);
btn2.addEventListener("click", decoder);



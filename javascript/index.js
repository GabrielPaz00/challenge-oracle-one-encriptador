let keys = ["e", "i", "a", "o", "u"];
let words = ["enter", "imes", "ai", "ober", "ufat"];

const advert = document.getElementById("fd");
const cont = document.getElementById("rc");
const copyBtn = document.getElementById("copy-text");
let output = document.getElementById("message-des");

const tags = [advert, cont, copyBtn, output];


function restaurarCSS (advert, cont, copyButton, output) {
	advert.style.display ="block";
	output.style.display = "none";
	copyButton.style.display = "none";
	cont.style.justifyContent = "center";
	cont.style.height = "100%";
}
function cambiarCSS(advert, cont, copyButton, output){
	advert.style.display ="none";
	output.style.display = "block";
	copyButton.style.display = "block";
	cont.style.justifyContent = "space-between";
	cont.style.height = "100%";
	copyButton.innerHTML = "Copiar";
}
function validar (tags, n) {
 	let input = document.getElementById("text-box").value;
 	const regex = /[a-z]/g;
 	const bs = /\s/g;
 	let arr = Array.from(input, (index) => index == index.match(regex) || index == index.match(sb) ? index : null);
	if (arr.join("") === input && arr.length > 0) {
		switch(n) {
		case 1:
			encrypt(tags, keys, words);	
		break;
		case 2:
			decrypt(tags, keys, words);
		break;	
		}
	}
	else {
		restaurarCSS(tags[0], tags[1], tags[2] ,tags[3]);
	}
}			
function encrypt(tags, keys, words) {
	let input = document.getElementById("text-box").value;
	let newMessage = input
	.replaceAll(keys[0], words[0])
	.replaceAll(keys[1], words[1])
	.replaceAll(keys[2], words[2])
	.replaceAll(keys[3], words[3])
	.replaceAll(keys[4], words[4]);
	cambiarCSS(tags[0], tags[1], tags[2], tags[3]);
	tags[3].innerHTML = newMessage; //Mostrará mensaje encriptado.
}
function decrypt(tags, keys, words) {
	let input = document.getElementById("text-box").value;
	let newMessage = input
	.replaceAll(words[0], keys[0])
	.replaceAll(words[1] , keys[1])
	.replaceAll(words[2] , keys[2])
	.replaceAll(words[3] , keys[3])
	.replaceAll(words[4] , keys[4]);
	cambiarCSS(tags[0], tags[1], tags[2], tags[3]);
	tags[3].innerHTML = newMessage; //Mostrará mensaje desencriptado.
}	
function copyText(tags) {
	let texto = tags[3].innerText;
	navigator.clipboard.writeText(texto);
	tags[2].innerHTML = "Texto copiado";
}
function cleanTextArea(tags) {
	let input = document.getElementById("text-box");
	input.value !=null ? input.value = null : null;
}
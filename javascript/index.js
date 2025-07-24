const map = new Map();

map.set('e', 'enter');
map.set('i', 'imes');
map.set('a', 'ai');
map.set('o', 'ober');
map.set('u', 'ufat');

const advert = document.getElementById('fd');
const cont = document.getElementById('rc');
const copyBtn = document.getElementById('copy-text');
let output = document.getElementById('message-des');
let input = document.getElementById('text-box').value;

const findKey = (value) => {
  for (let [key, val] of map) {
    if (val === value) {
      return key;
    }
  }
  return value;
};

const resetCSS = () => {
  advert.style.display = 'block';
  output.style.display = 'none';
  copyBtn.style.display = 'none';
  cont.style.justifyContent = 'center';
};

const changeCSS = () => {
  advert.style.display = 'none';
  output.style.display = 'block';
  copyBtn.style.display = 'block';
  cont.style.justifyContent = 'space-between';
  copyBtn.innerHTML = 'Copiar';
};

/**
 * Validates the input from the element with id 'text-box'.
 * Checks if the input contains only lowercase letters and spaces, and is not empty.
 *
 * @returns {boolean} True if the input is valid, false otherwise.
 */
const validateInput = () => {
  const regex = /^[a-z\s]+$/;
  return regex.test(input) && input.length > 0;
};

const encrypt = () => {
  const isValidInput = validateInput();
  isValidInput ? encryptMessage() : resetCSS();
};
const decrypt = () => {
  const isValidInput = validateInput();
  isValidInput ? decryptMessage() : resetCSS();
};

/**
 * Encrypts the message entered in the input element with id 'text-box'
 * by replacing vowels with their mapped values from the 'map' object.
 * Updates the output element with the encrypted message and applies CSS changes.
 *
 * @function
 * @returns {void}
 */
const encryptMessage = () => {
  let newMessage = input
    .replaceAll('e', map.get('e'))
    .replaceAll('i', map.get('i'))
    .replaceAll('a', map.get('a'))
    .replaceAll('o', map.get('o'))
    .replaceAll('u', map.get('u'));
  changeCSS();
  output.innerHTML = newMessage; //Mostrará mensaje encriptado.
};

/**
 * Decrypts the message from the input text box by replacing encrypted substrings
 * with their corresponding decrypted values using the findKey function.
 * Updates the output element with the decrypted message and applies CSS changes.
 *
 * @function
 * @returns {void}
 */
const decryptMessage = () => {
  let newMessage = input
    .replaceAll('enter', findKey('enter'))
    .replaceAll('imes', findKey('imes'))
    .replaceAll('ai', findKey('ai'))
    .replaceAll('ober', findKey('ober'))
    .replaceAll('ufat', findKey('ufat'));
  changeCSS();
  output.innerHTML = newMessage; //Mostrará mensaje desencriptado.
};

const copyText = () => {
  navigator.clipboard.writeText(output.innerHTML);
  copyBtn.innerHTML = 'Texto copiado';
};

const clearInput = () => {
  let input = document.getElementById('text-box');
  input != null ? (input.value = null) : null;
};

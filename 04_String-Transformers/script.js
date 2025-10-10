const input = document.querySelector('#input-box');
const lower = document.querySelector('#lower');
const upper = document.querySelector('#upper');
const camelCase = document.querySelector('#camel');
const pascalCase = document.querySelector('#pascal');
const trimCase = document.querySelector('#trim');
const snakeCase = document.querySelector('#snake');
const kebabCase = document.querySelector('#kebab');

function inputTransformers(str) {
  let inputText = input.value;
  lower.textContent = inputText.toLowerCase();
  upper.textContent = inputText.toUpperCase();
  camelCase.textContent = toCamelCase(inputText);
  pascalCase.textContent = toPascalCase(inputText);
  trimCase.textContent = toTrimSpaces(inputText);
  snakeCase.textContent = toSnakeCase(inputText);
  kebab.textContent = toKebabCase(inputText);
}
inputTransformers();
input.addEventListener('input', inputTransformers);

function toCamelCase(str) {
  str = str
    .trim()
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
  return str.join('');
}
function toPascalCase(str) {
  str = str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  return str.join('');
}

function toTrimSpaces(str) {
  return str.toLowerCase().replaceAll(' ', '');
}
function toSnakeCase(str) {
  return str.trim().toLowerCase().replaceAll(' ', '_');
}
function toKebabCase(str) {
  return str.trim().toLowerCase().replaceAll(' ', '-');
}

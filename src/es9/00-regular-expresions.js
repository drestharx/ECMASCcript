// consiste en una mejora interesante para capturar en grupos valores que estan dentro una expresion regular

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-10-09');
console.table(matchers);
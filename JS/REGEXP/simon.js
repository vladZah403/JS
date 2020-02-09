let txt = prompt('Введите строку')
function countWords(txt){
    return txt.match(/[А-Яа-яЁ]{2,}/g).length;
}
console.log(countWords(txt))
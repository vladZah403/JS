let pasport = prompt('Введите серию и номер паспорта ');
let tel = prompt('Введите номер телефона');
let id = prompt(' Введите идентификационный код');
let regPasp = /^[f-z-F-Z]\d{6}$/;
let regTel = /^[0]\d{9}$/;
let regId = /^\d{8}$/;
if(regPasp.test(pasport) == true){
    console.log('Номер паспорта введён правильно')
}else{
    console.log('Проверте введёные вами данные')
}
if(regTel.test(tel) == true){
    console.log('Номер телефона введён правильно')
}else{
    console.log('Проверте введёные вами данные')
}
if(regId.test(id) == true){
    console.log('Идентификационный код введён правильно')
}else{
    console.log('Проверте введёные вами данные')
}



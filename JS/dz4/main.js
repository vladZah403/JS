// let p = Number(prompt('Введите ваш возраст'));
// let s
// switch(true){
//     case  p <= 2 :{
//     s = 'Вы ребёнок';
//     break;
//     }
//     case p >= 12:
//     case p <=  18 :{
//     s = 'Вы подросток ';
//     break;
//     }
//     case p > 18:
//     case p <= 60 : {
//      s = 'Вы взрослый ';
//     break;
//     }
//     case  p > 60  :{
//     s = 'Вы пенсионер ';
//     break;
//     }
//     default:{
//         s = 'непонятно кто вы';
//     }
// }
// alert(s)



// let a = Number(prompt('Введите число от 0 до 9'));
// let b
// switch(a){
//     case a = 0:{
//     b = ')';
//     break;
//     }
//     case a = 1:{
//     b = '!';
//     break;
//     }
//     case a = 2:{
//     b = '@';
//     break;
//     }
//     case a = 3:{
//     b = '#';
//     break;
//     }
//     case a = 4:{
//     b = '$';
//     break;
//     }
//     case a = 5:{
//     b = '%';
//     break;
//     }
//     case a = 6:{
//     b = '^';
//     break;
//     }
//     case a = 7:{
//     b = '&';
//     break;
//     }
//     case a = 8:{
//     b = '*';
//     break;
//     }
//     case a = 9:{
//     b = '(';
//     break;
//     }  

// }
// alert(b)


//не работает
// let a = Number(prompt('Введите трехзначное число '));
// let a1 = 0,
//     a2 = 0,
//     a3 = 0, 
//     a4 = 0;
// a1 = (a / 1000);
// a2 = (a / 100) % 10;
// a3 = (a / 10) % 10;
// a4 = a % 10;
// if (a1 == a2 && a2 == a3){
// alert('Да есть одинаковые числа')
// }
// if(a1 ==  a3 && a3 == a4 ){    
// alert('Да есть одинаковые числа')
// }
// if(a2 == a3 && a3 == a4){
// alert('Да есть одинаковые числа')
// }
// if(a1 == a2 && a2 == a4){
// alert('Да есть одинаковые числа')
// }
// else{
// alert('нет')
// }


// let a = Number(prompt('Введите год '));
// if(a % 4 === 0){
//     alert('Год високосный')
// }else{
//     alert('Год не высокосный')
// }


 
// let a = Number(prompt('Введите пятизначное число'))
// let b;
// let c;
// let e;
// if((a > 9999)&&(a < 100000))
// {
//     b=a / 10000;
//     a=a % 10000;
//     c=a / 1000;
//     a=a % 1000;
//     a=a % 100;
//     e=a / 10;
//     a=a % 10;
// if ((b == a)&&(c == e))
// {
// alert('Это число палиндром');
// }else {
// alert('Это число не палиндром');
// }
// }else{
// alert('Вы ввели не пятизначное');
// }




// const EUR = 0.90;
// const AZN = 0.59;
// const UAN = 0.043;
// const mani = prompt('выберети валюту (EUR, AZN, UAN)');
// let obmen
// let USD = prompt('Введите сумму в долларах ');
// switch(mani){
//     case 'EUR':{
//         obmen = EUR*USD;
//         break;
//     }
//     case 'AZN':{
//         obmen = AZN*USD;
//         break;
//     }
//     case 'UAN':{
//         obmen = UAN*USD;
//         break;
//     }
    
// }

// alert('Сумма  после обмена   ' +obmen);


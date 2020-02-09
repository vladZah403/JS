// let str = prompt('Введите строку английскими или рускими буквами'),
//     leng = 0,
//     nam  = 0,
//     symbo = 0;   
//     for(let i = 0; i < str.length; i++){
//         if(str[i].charCodeAt(0) >= 1040 && str[i].charCodeAt(0) <= 1105 ){
//             leng ++  
//         } else if(str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122){
//             leng ++
//         } else if(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57){
//             nam ++
//         }else if(str[i].charCodeAt(0) >= 34 && str[i].charCodeAt(0) <= 47 || str[i].charCodeAt(0) >= 58 && str[i].charCodeAt(0) <= 64){
//             symbo++
//         }
//     }
// console.log(`количество букв ${leng}`);
// console.log(`количество цифр ${nam}`);
// console.log(`другие символи ${symbo}`);


// let a = '',
//     b = '';
// do {
//     a = prompt('Введите двухзначное число:');
// } while (a.length != 2);
// switch (a[0]){
//     case '1':
//         switch (a[1]){
//             case '0':{
//                 b = 'Десять';
//                 break;
//             }
//             case '1':{
//                 b = 'Одиннадцать';
//                 break;
//             }
//             case '2':{
//                 b = 'Двенадцать';
//                 break;
//             }
//             case '3':{    
//                 b = 'Тринадцать';
//                 break;
//             }
//             case '4':{
//                 b = 'Четырнадцать';
//                 break;
//             }
//             case '5':{
//                 b = 'Пятнадцать';
//                 break;
//             }
//             case '6':{
//                 b = 'Шестнадцать';
//                 break;
//             }
//             case '7':{
//                 b = 'Семнадцать';
//                 break;
//             }
//             case '8':{
//                 b = 'Восемнадцать';
//                 break;
//             }
//             case '9':{
//                 b = 'Девятнадцать';
//                 break;
//             }
//         }
//             break;
//         case '2':{
//             b = 'Двадцать ';
//             break;
//         } 
//         case '3':{
//             b = 'Тридцать ';
//             break;
//         } 
//         case '4':{
//             b = 'Сорок ';
//             break;
//         }  
//         case '5':{
//             b = 'Пятьдесят ';
//             break;
//         }
//         case '6':{
//             b = 'Шестьдесят ';
//             break;
//         }   
//         case '7':{
//             b = 'Семьдесят ';
//             break;
//         }  
//         case '8':{
//             b = 'Восемьдесят ';
//             break;
//         } 
//         case '9':{
//             b = 'Девяносто ';
//             break;
//         } 
//     }
//     if(a[0] != '1'){
//         switch (a[1]){
//             case '1':{
//                 b += 'один';
//                 break;
//             }
//             case '2':{
//                 b += 'два';
//                 break;
//             }
//             case '3':{
//                 b += 'три';
//                 break;
//             }
//             case '4':{
//                 b += 'четыре';
//                 break;
//             }
//             case '5':{
//                 b += 'пять';
//                 break;
//             }
//             case '6':{
//                 b += 'шесть';
//                 break;
//             }
//             case '7':{
//                 b += 'семь';
//                 break;
//             }
//             case '8':{
//                 b += 'восемь';
//                 break;
//             }
//             case '9':{
//                 b += 'девять';
//                 break;
//             }
//         }
//     }
//     console.log(b);


// let str = prompt('Введите строку сбольшими буквами');
// let a =  '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i].charCodeAt(0) >= 1072 && str[i].charCodeAt(0) <= 1105 ){
//             a = str.toUpperCase();
//         }else if(str[i].charCodeAt(0) >= 1040 && str[i].charCodeAt(0) <= 1071 ){
//             a = str.toLowerCase()
//         }else if(str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122 ){
//             a = str.toUpperCase();
//         }else if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90 ){
//             a = str.toLowerCase()
//         }else if(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 59){
//             a += '_'
//         }
        
//     }

// console.log(a)


// let style = prompt('Введите CSS стиль');
// let style2 = '',
//     k = 0;
// style = style.trim();
// k = style.indexOf('-');
// style2 = style.slice(0, k) + style[k + 1].toLocaleUpperCase() + style.slice(k + 2);
// console.log(style2);


// let str = '';
// do {
//     str += prompt('Введите строку: ');
// } while (confirm('Ввести еще строку?'));
// console.log(str);


// let url = prompt('Введите URL адрес'),
//     dom = '',
//     prot = '',
//     way = '',
//     a = 0,
//     b = 0;
// a = url.indexOf(':');
// b = url.indexOf('/', a + 3);
// prot = url.slice(0, a);
// dom = url.slice(a+3,b);
// way = url.slice(b);
// console.log(`Протокол ${prot}, домен ${dom}, путь ${way}`)
 

// let str = prompt('Введите строку: ');
// let roz = prompt('Введите разделитель: ');
// let a = [];
// let b = 0;
// for(let i = 0; i < str.length; i++){
//     if(str[i] == roz){
//         a.push(str.slice(b,i));
//         b = i + 1;
//     }else if( i == (str.length - 1)){
//         a.push(str.slice(b));
//     }
// }
// console.log(a);
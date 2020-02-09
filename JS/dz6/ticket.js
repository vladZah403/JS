let a = prompt ('введите шестизначный номер билета');
let b = Math.trunc(a/100000);
let c = Math.trunc((a%100000)/10000);
let d = Math.trunc((a%10000)/1000);
let b1 = Math.trunc((a%1000)/100);
let c1 = Math.trunc((a%100)/10);
let d1 = Math.trunc(a%10);
let sum1 = b + c + d;
let sum2 = b1 + c1 + d1 
if(sum1==sum2){
    alert('Счасливый билет')
}else{
    alert('Не счасливый билет')
}

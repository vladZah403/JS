let namb = []
for(i = 0; i<10; i++){
    let a = prompt('Введите ' + i + ' число ')
    namb.push(a)
} 

namb.sort((a, b) => b - a);
for(i = 0; i<7; i++){
namb.pop()
}

console.log(namb)
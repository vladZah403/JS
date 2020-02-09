const XO = ['X','O'];
let a = [];
for(let i = 0; i < 3; i++){
    a[i]=[];
    for(let j = 0; j < 3; j++){
        a[i][j]= XO [Math.floor(Math.random()* XO.length)];
    }
}
console.log(a)
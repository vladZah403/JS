const rectangle = {
    Ax : 5, 
    Ay : 7, 
    Dx : 4, 
    Dy : 6
};

function rectan(l){
    return rectangle;
}
console.log(rectan(rectangle));

function width(l){ 
    return l.Ax - l.Dx;
}
console.log(`Ширина прямоугольника = ${width(rectangle)}`);

function heigth(l){ 
    return l.Ay - l.Dy;
}
console.log(`Высота прямоугольника = ${heigth(rectangle)}`);

function S(l){ 
    let heigth = 0;
    let width = 0;
    
    heigth = l.Ay - l.Dy;
    width = l.Ax - l.Dx;
    return heigth * width;
}
console.log(`Площадь прямоугольника = ${S(rectangle)}`); 

function P(l){ 
    let heigth = 0;
    let width = 0;
    
    heigth = l.Ay - l.Dy;
    width = l.Ax - l.Dx;
    return 2 * heigth + 2 * width;
}
console.log(`Периметр прямоугольника = ${P(rectangle)}`); 

function NewWidth(l){ 
    let width = 0;
    width = l.Ax - l.Dx;
    let a = parseInt(prompt('Введите на сколько увеличить ширину прямоугольника '));
    return width + a;
}
console.log(`Новая ширина прямоугольника = ${NewWidth(rectangle)}`); 

function NewHeigth(l){ 
    let heigth = 0;
    heigth = l.Ay - l.Dy;
    let a = parseInt(prompt('Введите на сколько  увеличить высоту  прямоугольника '));
    return heigth + a;
}
console.log(`Новая высота прямоугольника = ${NewHeigth(rectangle)}`);

function NewHeigthWidth(l){ 
    let heigth = 0;
    let width= 0;
    heigth = l.Ay - l.Dy;
    width = l.Ax - l.Dx;
    let a = parseInt(prompt('Введите на сколько  увеличить высоту  прямоугольника '));
    let a2 = parseInt(prompt('Введите на сколько  увеличить ширину прямоугольника '));
    return (`Новая высота прямоугольника = ${heigth + a} и новая ширина =  ${width + a2}`);
}
console.log( NewHeigthWidth(rectangle)); 

function X(l){
    let a = parseInt(prompt('Введите на сколько  необходимо сдвинуть прямоугольник по оси Х '));
    l.Ax = l.Ax + a;
    l.Dx = l.Dx + a;
    return rectangle;
}    
console.log(`Прямоугольник с новыми координатами `);
console.log(X(rectangle))

function Y(l){
    let a = parseInt(prompt('Введите на сколько  необходимо сдвинуть прямоугольник по оси Y '));
    l.Ay = l.Ay + a;
    l.Dy = l.Dy + a;
    return rectangle;
}    
console.log(`Прямоугольник с новыми координатами `);
console.log(Y(rectangle))

function XY(l){
    let a = parseInt(prompt('Введите на сколько  необходимо сдвинуть прямоугольник по оси Х '));
    let a2 = parseInt(prompt('Введите на сколько  необходимо сдвинуть прямоугольник по оси Y '));
    l.Ax = l.Ax + a;
    l.Dx = l.Dx + a;
    l.Ay = l.Ay + a2;
    l.Dy = l.Dy + a2;
    return rectangle;
}    
console.log(`Прямоугольник с новыми координатами `);
console.log(XY(rectangle))







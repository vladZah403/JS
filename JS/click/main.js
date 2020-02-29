let a = '';
function calc(nam){
 a += nam;
 console.log(a);
}

function sum(nam){
    a += nam;
    console.log(a)
}

function rez(nam){
    console.log(eval(a))
}

function del(nam){
    a = ''
}

function cleaning(nam){
    a = a.slice(0,-1);
}
//Какое ты оружие используешь, земноводное?

let turtle = prompt("Введите черепашку: Донателло, Микеланджело, Рафаэль, Леонардо");
let answ  

switch(turtle){
    case "Донателло":{
    answ = "Посох Бо";
    break;
    }
    case "Микеланджело": {
    answ = "Нунчаки";
    break;
    }
    case "Рафаэль": {
    answ = "Пара сай";
    break;
    }
    case "Леонардо": {
    answ = "Катана";
    break;
    }
}

alert(answ);
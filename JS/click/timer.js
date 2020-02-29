let sec = 0;
let int = 0;

function start(){
    if(int == 0){
        int = setInterval(()=>sec++, 1000); 
        console.log('таймер запущен')
        
    }else{
        console.error('таймер уже запущен')
    }
}

function paus(){
    if(int == 0){
        console.error('таймер не был запущен')
    }else{
        clearInterval(int)
        int = 0
        console.log('таймер остановлен')
    }
}

function stop(){
    if(int == 0){
        console.error('таймер не был запущен')
    }else{
        clearInterval(int)
        console.log('Прошло', sec);
        int = 0;
        sec = 0;
        
       
        
    }
}


const arr = [];
for(let i = 0; i < 4; i++){
    arr[i] = [];
    for(let j = 0; j < 13; j++){
        switch(i){
            case 0:
                switch(j){
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:{
                        arr[i][j] = (`${j + 2} ♥`);
                        break;
                    }
                    case 9:{
                        arr[i][j] = 'В♥';
                        break;
                    }
                    case 10:{
                        arr[i][j] = 'Д♥';
                        break;
                    }         
                    case 11:{
                        arr[i][j] = 'К♥';
                        break;
                    }   
                    case 12:{
                        arr[i][j] = 'Т♥';
                        break;
                    }
                }
                break;
            case 1:
                switch(j){
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:{
                        arr[i][j] = (`${j + 2} ♠`);
                        break;
                    }
                    case 9:{
                        arr[i][j] = 'В♠';
                        break;
                    }
                    case 10:{
                        arr[i][j] = 'Д♠';
                        break;
                    }         
                    case 11:{
                        arr[i][j] = 'К♠';
                        break;
                    }   
                    case 12:{
                        arr[i][j] = 'Т♠';
                        break;
                    }                      
                }
                break;
            case 2:
                switch(j){
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:{
                        arr[i][j] = (`${j + 2} ♦`);
                        break;
                    }
                    case 9:{
                        arr[i][j] = 'В♦';
                        break;
                    }
                    case 10:{
                        arr[i][j] = 'Д♦';
                        break;
                    }         
                    case 11:{
                        arr[i][j] = 'К♦';
                        break;
                    }   
                    case 12:{
                        arr[i][j] = 'Т♦';
                        break;
                    }
                }
                break;
            case 3:
                switch(j){
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:{
                        arr[i][j] = (`${j + 2} ♣`);
                        break;
                    }
                    case 9:{
                        arr[i][j] = 'В♣';
                        break;
                    }
                    case 10:{
                        arr[i][j] = 'Д♣';
                        break;
                    }         
                    case 11:{
                        arr[i][j] = 'К♣';
                        break;
                    }   
                    case 12:{
                        arr[i][j] = 'Т♣';
                        break;
                    }
                }   
                break;         
        }
    }
}
console.log(arr[parseInt(Math.random() * 4)][parseInt(Math.random() * 13)]);
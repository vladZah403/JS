
 
function countColor(carsArr){
    const car = []
    for(let i = 0; i < cars.length; i++){
        car.push(cars[i].COLOR);
    }
    return car

}

function maxColor(cars){
    const color = {};  
    let max = 0;
    let name = '';
    for(let i = 0; i < cars.length; i++){
        if(color[cars[i].COLOR]){
            color[cars[i].COLOR]++
        }else{
            color[cars[i].COLOR]=1
        }

        if(max < color[cars[i].COLOR]){
            max = color[cars[i].COLOR];
            name = cars[i].COLOR
        }
    }
    return {max, name}
}

function countCars(cars){
    let count = {};
    for(let i = 0; i < cars.length; i++){
         if(count[cars[i].OVD]){
            count[cars[i].OVD]++;
        }else{
            count[cars[i].OVD] = 1;
        }
       
    }
    return count
}


function oldAndNew(cars){
    const min = {
        name : '', 
        date : ''
    };

    const max = {
        name : '',
        date : ''
    };
    
    for(let i = 1; i < cars.length; i++){
        if(min.date < cars[i].INSERT_DATE){
            min.date = cars[i].INSERT_DATE;
            min.name = cars[i].BRAND;
        }
        else if(max.date < cars[i].INSERT_DATE){
            max.date = cars[i].INSERT_DATE;
            max.name = cars[i].BRAND;
        }
    }
    return {min, max};
}


console.log(countColor(cars));
console.log(maxColor(cars));
console.log(countCars(cars));
console.log(oldAndNew(cars));
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (property in statistics) {
    if (property[0] == 'r') { // starts with 'r'
        console.log(statistics[property]); 
    } else if (statistics[property] % 2 == 1) { // value is odd
        console.log(statistics[property]);
    }
}

/*
expected: 
21
45
5
2
*/
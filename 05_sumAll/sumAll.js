const sumAll = function(first, second) {
    let sum = 0;
    
    if ( first > second) {
        first += second;
        second = first - second;
        first -= second; 
    } 
    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)) {
        sum = 'ERROR';
        return sum;
    }     
    else {
        for(let i = first; i <= second; i++) {
            sum += i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

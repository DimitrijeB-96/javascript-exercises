const removeFromArray = function(arr, ...num) {
        let x = num.length;
        for( let j = 0; j < x; j++) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== num[j]) {
                    continue;
                } else {
                    arr.splice(i, 1);
                }
            }
        }
        return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

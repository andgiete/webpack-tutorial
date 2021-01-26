var multiply = require('./multiply'); 
var factorial = function(a) {
    var result=1;
    while(a !== 0){
        result = multiply(result,a);
        a = a-1;
    }
    return result;
} 

module.exports = factorial;
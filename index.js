function calculator(method, a, b){
    let result;

    switch(method){
        case "add":
            result = a + b;
            break;
        case "sub":
            result = a - b;
            break;
    }
    return result;
}

module.exports = {
    calculator
};


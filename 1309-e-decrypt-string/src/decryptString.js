"use strict";
exports.__esModule = true;
exports.decryptString = function (str) {
    var output = [];
    for (var i = 0; i < str.length; i++) {
        switch (str[i + 2]) {
            case '#':
                output.push(exports.numberToChar(Number(str[i] + str[i + 1])));
                i += 2;
                break;
            default:
                output.push(exports.numberToChar(Number(str[i])));
        }
    }
    return output.join('');
};
exports.numberToChar = function (num) {
    var baseCode = 'a'.charCodeAt(0) - 1;
    return String.fromCharCode(num + baseCode);
};
// String.fromCharCode()

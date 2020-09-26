"use strict";
/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
*/
exports.__esModule = true;
exports.countSubstrings = function (str) {
    // find even length sub strings
    var numEvenPalindromes = exports.countEvenPalindromes(str);
    var numOddPalindromes = exports.countOddPalindromes(str);
    //find odd length substrings
    return numEvenPalindromes + numOddPalindromes;
};
exports.countEvenPalindromes = function (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var pLead = i + 1;
        var pTail = i;
        while (str[pTail] === str[pLead] && pLead < str.length && pTail > -1) {
            count += 1;
            pTail -= 1;
            pLead += 1;
        }
    }
    return count;
};
exports.countOddPalindromes = function (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        var pLead = i;
        var pTail = i;
        while (str[pTail] === str[pLead] && pLead < str.length && pTail > -1) {
            count += 1;
            pTail -= 1;
            pLead += 1;
        }
    }
    return count;
};

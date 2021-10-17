"use strict";
// this function calculate how much days are you lived based on your birthday
function daysLived(birthday) {
    var now = new Date();
    var age = now.getFullYear() - birthday.getFullYear();
    var m = now.getMonth() - birthday.getMonth();
    var d = now.getDate() - birthday.getDate();
    if (m < 0 || (m === 0 && d < 0)) {
        age--;
    }
    return age * 365 + Math.floor(age / 4) - Math.floor(age / 100) + Math.floor(age / 400);
}
var birthday = new Date(1996, 2, 2);
var days = daysLived(birthday);
console.log('Han pasaasdasdpppdoo', days);
console.log('Han pasaasdasdpppdoo', days);
console.log('Han pasaasdasdpppdoo1', days);
console.log('Han pasaasdasdpppdoo2', days);

// this function calculate how much days are you lived based on your birthday
function daysLived(birthday: Date) {
    let now = new Date();
    let age = now.getFullYear() - birthday.getFullYear();
    let m = now.getMonth() - birthday.getMonth();
    let d = now.getDate() - birthday.getDate();
    if (m < 0 || (m === 0 && d < 0)) {
        age--;
    }
    return age * 365 + Math.floor(age / 4) - Math.floor(age / 100) + Math.floor(age / 400);

}

let birthday = new Date(1996, 2, 2);
let days = daysLived(birthday); 
console.log('Han pasaasdasdpppdoo',days);
console.log('Han pasaasdasdpppdoo',days);
console.log('Han pasaasdasdpppdoo1',days);
console.log('Han pasaasdassdpppdoo2',days);
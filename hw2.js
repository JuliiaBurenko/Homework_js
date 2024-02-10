var num = prompt("Введіть число");
if (num<=0 || num >100 || isNaN(num) == true) {
    console.log("Введіть число від 1 до 100");
}/* else if(num == undefined) {
    console.log("Введіть число");
} */else if (num %10 == 1 && num!==11) {
    console.log(num + " рік")
} else if (num %10> 1 && num%10 < 5 && num!==12 && num!==13 && num!==14) {
    console.log(num + " роки");
} else  {
    console.log(num + " років")
}
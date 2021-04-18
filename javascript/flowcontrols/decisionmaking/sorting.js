var num1 = 14;
var num2 = 20;
var num3 = 8;
if ((num1 > num2) && (num1 > num3)) {
    if (num2 > num3) {
        console.log(`Ascending order is ${num3} ${num2} ${num1}`);
        console.log(`Descending order is ${num1} ${num2} ${num3}`);
    }
    else {
        console.log(`Ascending order is ${num1} ${num3} ${num2}`);
        console.log(`Descending order is ${num2} ${num3} ${num1}`);
    }
}
else if ((num2 > num1) && (num2 > num3)) {
    if (num1 > num3) {
        console.log(`Ascending order is ${num3} ${num1} ${num2}`);
        console.log(`Descending order is ${num2} ${num1} ${num3}`);
    }
    else {
        console.log(`Ascending order is ${num1} ${num3} ${num2}`);
        console.log(`Descending order is ${num2} ${num3} ${num1}`);
    }
}
else if ((num3 > num1) && (num3 > num2)) {
    if (num1 > num2) {
        console.log(`Ascending order is ${num2} ${num1} ${num3}`);
        console.log(`Descending order is ${num3} ${num1} ${num2}`);
    }
    else {
        console.log(`Ascending order is ${num1} ${num2} ${num3}`);
        console.log(`Descending order is ${num3} ${num2} ${num1}`);
    }
}
else {
    console.log("All numbers are equel");
}

//Find and display total sum of numbers from 1 to 3;
//Find and display total sum of numbers from 20 to 220;
function sum(a, b) {
    var total = 0;
    for (var i = a; i <= b; i++) {
        total += i;
    }
    console.log("Total sum of numbers from " + a + " to " + b + " = " + total);
}
sum(1, 3);
sum(20, 220);
//Display even numbers from 1 to 20 by using for loop.
//------do it with using ‘continue’
function evenNum(a, b) {
    for (var i = a; i <= b; i++) {
        if (i % 2) {
            continue;
        }
        else {
            console.log(i);
        }
    }
}
evenNum(1, 20);
//------do it without using ‘continue’
function evenNum1(a, b) {
    for (var i = a; i <= b; i++) {
        if (i % 2 !== 1) {
            console.log(i);
        }
    }
}
evenNum1(1, 20);
//Display odd numbers from 10 to 30 by using ‘while’ loop.
function oddNum(a, b) {
    while (a <= b) {
        if (a % 2 === 1) {
            console.log(a);
        }
        a++;
    }
}
oddNum(10, 30);
//Display numbers from 1 to 15 using ‘for’ loop, once num of iteration is equal the number of month of your birthday then stop execution of loop
function month(monthNum) {
    for (var i = 1; i <= 15; i++) {
        console.log(i);
        if (i == monthNum) {
            break;
        }
    }
}
month(6);
//- Rewrite code from using ‘for’ to using ‘while’
//for(var i = 0; i < 5; i++) {
//   console.log(`number ${i}  =)`)
//}
function rewrite() {
    var i = 0;
    while (i < 5) {
        console.log(`number ${i}  =)`);
        i++;
    }
}
rewrite();
//- Write code which will ask user (prompt ) to put number greater than 100, repeat prompt until user put required number, then display result of prompt
//---do it using ‘while’
function askWhile() {
    var ask = 0;
    while (ask < 100) {
        ask = prompt("put number greater than 100", "101");
    }
    console.log(ask);
}
askWhile();
//---do it using ‘do while’
function askDoWhile() {
    var ask = 0;
    do {
        ask = prompt("put number greater than 100", "999");
    }
    while (ask < 100)
    console.log(ask);
}
askDoWhile();
//---Array of "#"
function show() {
    var a = "#";
    for (var i = 0; i < 10; i++) {
        console.log(a);
        a += a[i];
    }
}
show();
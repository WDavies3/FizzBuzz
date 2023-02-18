function fizzBuzz(input) {
    output = "";
    if (input % 3 == 0) {
        output += "Fizz";
    }
    if (input % 5 == 0) {
        output += "Buzz";
    }
    if (output == "") {
        output += input;
    }
    return output;
}

for (var i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
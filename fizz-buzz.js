// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input

function fizzBuzz(input) {
    if (typeof input != 'number') {
        return NaN;
    }

    if (input % 3 === 0 && input % 5 === 0) {
        return "FizzBuzz";
    }

    if (input % 3 === 0) {
        return "Fizz";
    }

    if (input % 5 === 0) {
        return "Buzz";
    }

    return input;
}

console.log("Testing fizzBuzz function:");

console.log(fizzBuzz(3)); // Expected output: "Fizz"
console.log(fizzBuzz(5)); // Expected output: "Buzz"
console.log(fizzBuzz(15)); // Expected output: "FizzBuzz"
console.log(fizzBuzz(7)); // Expected output: 7
console.log(fizzBuzz("not a number")); // Expected output: NaN
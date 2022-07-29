/*
    Problem: Generate n prime numbers using typescript.
*/
function checkPrime(num) {
    if (num === 1)
        return false;
    if (num === 2 || num === 3)
        return true;
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    for (var i = 5; i * i <= num; i = i + 6) {
        if (num % i === 0 || (num % (i + 2) === 0))
            return false;
    }
    return true;
}
function generatePrimeNumbers(n) {
    if (n <= 0) {
        console.log('Invalid Input');
        return;
    }
    var primes = [];
    for (var i = 1; i <= n; i++) {
        if (checkPrime(i))
            primes.push(i);
    }
    console.log("Prime Number Less Than Or Equal To ".concat(n, " Is: ").concat(primes));
}
generatePrimeNumbers(5);
generatePrimeNumbers(7);
generatePrimeNumbers(11);
generatePrimeNumbers(155);
generatePrimeNumbers(255);

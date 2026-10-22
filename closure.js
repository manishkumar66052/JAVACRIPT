// JavaScript Closure Example

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const result = outer();

for (let i = 1; i <= 20; i++) {
    result();
}

// Practicing JavaScript closures

function count(text) {
    let vowels = "aeiouAEIOU";
    let cnt = 0;

    for (let char of text) {
        if (!vowels.includes(char)) {  // Logic error: should not have '!' negation
            cnt++;
        }
    }
    return cnt;
}

console.log(count("Hello World"));

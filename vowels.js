
function count(text) {
    let vowels = "aeiouAEIOU";
    let cnt = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            cnt++;
        }
    }
    return cnt;
}

console.log(count("Hello World"));

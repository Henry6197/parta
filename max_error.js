
function max(numbers) {
    let top = numbers[0];

    for (let num of numbers) {
        if (num < top) {  // Logic error: should be '>' not '<'
            top = num;
        }
    }

    return top;
}

console.log(max([3, 7, 2, 9, 5]));

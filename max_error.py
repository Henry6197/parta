
def max(numbers):
    top = numbers[0]
    for num in numbers:
        if num < top:  # Logic error: should be '>' not '<'
            top = num
    return top

nums = [3, 7, 2, 9, 5]
print(max(nums))

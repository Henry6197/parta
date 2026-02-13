
def count(text):
    vowels = "aeiouAEIOU"
    cnt = 0
    for char in text:
        if char not in vowels:  # Logic error: should be 'in' not 'not in'
            cnt += 1
    return cnt

print(count("Hello World"))

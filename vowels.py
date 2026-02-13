
def count(text):
    vowels = "aeiouAEIOU"
    cnt = 0
    for char in text:
        if char in vowels:
            cnt += 1
    return cnt

print(count("Hello World"))

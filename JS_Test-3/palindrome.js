function palindrome(str) {
    const reversed = str
    .split('')
    .reverse()
    .join('');

     if(str === reversed)
     console.log("palindrome")
     else
     console.log("not palindrome")
}
(palindrome("madam"))
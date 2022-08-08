function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; //or str.charAt(i)
    }
    console.log(newString);
    if(newString === str){
        console.log('Palindrome')
        
    }else
    {
        console.log('Bukan palindrome');
    }
}
reverseString('malam');
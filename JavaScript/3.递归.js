function power(base, exponent) {
    if (exponent === 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(4,3));

function isEven(number) {
    var temp = number;
    if (number === 0)
        return true;
    else if (number === 1)
        return false;
    else if (number < 0)
        return isEven(number + 2 );
    else
        return isEven(number - 2);
}

console.log(-2 + "是偶数？" + isEven(-2));

function countBs(string) {
    var count = 0;
    for (var i = 0;i < string.length;i++) {
        if (string.charAt(i) === 'B') {
          count++;
        }
    }
    return count;
}

console.log(countBs("yuyuanBBB"));

function countChar(string, char) {
    var count = 0;
    for (var i = 0;i < string.length;i++) {
        if (string.charAt(i) === char)
            count++;
    }
    return count;
}

console.log(countChar("yuyuan", 'a'));
var size = 20;
for (var i = 1; i <= size; i++) {
    var star = '';
    for (var j = 1; j <= size; j++) {
        if (i % 2 !== 0)
            if (j % 2 !== 0)
                star += '#';
            else
                star += ' ';
        else if (j % 2 === 0)
            star += '#';
        else
            star += ' ';
    }
    console.log(star);
}

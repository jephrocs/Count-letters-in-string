
letterCount = (s) => {
    var obj = {}
    var sort = s.split("").sort()
    for (var i = 0; i < sort.length; i++) {

        if (obj[`${sort[i]}`]) {
            obj[`${sort[i]}`]++
        } else {
            obj[`${sort[i]}`] = 1
        }


    } return obj
}

console.log(letterCount('arithmetics'))
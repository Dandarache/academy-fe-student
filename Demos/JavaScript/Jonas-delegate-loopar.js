loop1()
loop2()
loop3()

function loop (startValue, endValue, output = '', insertpoint = 0, predicate) {
  for (let i = startValue; i < endValue; i++) {
    if (predicate != undefined) output = predicate(i)
    console.log(
      output.slice(0, insertpoint) +
        i +
        output.slice(insertpoint, output.length)
    )
  }
}

function loop1 () {
  /*
        Använd en for-loop för att skriva ut alla siffror mellan 5 och 18
    */
  loop(5, 19)
}

function loop2 () {
  /*
        Använd en for-loop för att skriva ut alla siffror mellan 0 och 9
    */
  loop(0, 10)
}

function loop3 () {
  /*
        Använd en forloop för att skriva ut:
            "Siffran 4 är tjusig". 
            "Siffran 5 är tjusig"
            "Siffran 6 är tjusig"
            "Siffran 7 är tjusig"
            "Siffran 8 är tjusig"
    */
  loop(4, 9, 'Siffran  är så tjusig', 'Siffran '.length)
  /* Extra: använd en forloop för att skriva ut:
        "1:a"
        "2:a"
        "3:e"
        "4:e"
        "5:e"
        ...
        "99:e"
    */
  loop(1, 100, '', 0, function (i) {
    return i < 3 ? 'a' : 'e'
  })
}

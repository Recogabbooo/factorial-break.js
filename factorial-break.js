let factorial = 1

while (true) {
    console.log(`El número actual es: ${factorial}`)
    factorial++
    if (factorial === 10) {
        factorial = 0
        break 
    }
}

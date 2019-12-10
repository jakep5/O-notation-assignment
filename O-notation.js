const towerOfHanoi = function(n, from, to, spare) {
    if (n == 1) {
        console.log(`move from ${from} to ${to}`)
    } else {
         towerOfHanoi(n-1, from, spare, to)
         towerOfHanoi(1, from, to, spare)
         towerOfHanoi(n-1, spare, to, from)
    }
}
console.log(towerOfHanoi(7, 'A', 'B', 'C'))

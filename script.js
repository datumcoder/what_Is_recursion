function countDown(n) {
    
    for ( let i = n; i > 0; i--){
        console.log(i)
    }
    console.log("breakout");
    
}


function countDownRecursive(n) {

if (n <= 0) {

    console.log("breakout");
    return

    }
    console.log(n)
    countDownRecursive(n - 1)

}

countDownRecursive(3)
    countDownRecursive(2)
            countDownRecursive(1)
                countDownRecursive(0)

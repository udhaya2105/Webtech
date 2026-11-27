function orderfood(callback) {
    setTimeout(() => {
        console.log("Food is ordered ");
        callback()
    }, 2000)

}
function preparefood(callback) {
    setTimeout(() => {
        console.log("Food is prepared 🥘🥗");
        callback()
    }, 2000)

}
function payment(callback) {
    setTimeout(() => {
        console.log("payment is done 💸💰");
        callback()
    }, 2000)
}
function takeaway(callback) {
    setTimeout(() => {
        console.log("Food is ready to take away ");
        callback()
    }, 2000)

}
orderfood(() => {
    preparefood(() => {
        payment(() => {
            takeaway(() => {
                console.log("Enjoy your food 😋");

            })
        })
    })

})
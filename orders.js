function validateForm() {


}

function confirmOrder() {

    console.log("Order being checked");
    var message;
    var r = confirm("Sure to place Order?");
    if (r == true) {
        message = "Order placed successfully!";
    } else {
        message = "Order not placed!";
    }
    window.alert(message);
}
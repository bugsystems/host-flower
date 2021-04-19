<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rose Flowers</title>
    <script src="./script.js"></script>
    <script src="./orders.js"></script>
    <link rel="stylesheet" href="./app.css">
    <!-- <link rel="stylesheet" href="./landing.css"> -->
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.css">
</head>

<body style="background: #c29571;">
    <div class="container">
        <div class="row">
            <h2>Welcome to Rose's Flowers</h2>
            <h5>Order place</h5>
            <i><em>To place your order, just scroll down and enter the number of each flower category</em></i>
            <div>
                <form action="" method="POST" id="neworder" name="myForm">
                    <section><b><u>Personal Details</u></b></section>
                    <div class="form-group">
                        <p>Your Name:</p>
                        <input class="form-control" type="text" id="userName" placeholder="Sender's full name" required>
                    </div>
                    <div class="form-group">
                        <p>Phone Number:</p>
                        <input class="form-control" type="number" id="phoneNumber" placeholder="E.g. 070000000" required>
                        <p><em>Required for delivery</em></p>
                    </div>
                    <div class="form-group">
                        <p>Your Location:</p>
                        <input class="form-control" type="text" id="location" placeholder="Your pick up location" required>
                    </div>
                    <div class="form-group">
                        <section><b><u>Order Details</u></b></section>
                        <div class="form-group">
                            <label> <img class="img" src="./img/Apple Jack.jfif"> Apple Jack <br>Cost: Kshs. 300.00 </label>
                            <input class="form-control" type="number" min="0" id="appleJack" placeholder="Number of Daisys you wish to purchase" value="0">
                        </div>

                        <div class="form-group">
                            <label>  <img class="img" src="./img/heart of gold.png">Heart of Gold <br>Cost: Kshs. 320.00 </label>
                            <input class="form-control" type="number" min="0" id="heartGold" placeholder="Number of Daisys you wish to purchase" value="0">
                        </div>

                        <div class="form-group">
                            <label> <img class="img" src="./img/Beluga.png"> Beluga <br>Cost: Kshs. 250.00</label>
                            <input class="form-control" type="number" min="0" id="beluga" placeholder="Number of Daisys you wish to purchase" value="0">
                        </div>
                    </div>
                    <label> <img class="img" src="./img/albatros.png"> Albatros <br>Cost: Kshs. 300.00 </label>
                    <input class="form-control" type="number" id="albatros" placeholder="Number of Daisys you wish to purchase" value="0">
            </div>
            <!--placeholder that initializes paymentStatus value-->
            <section><b><u>Payment Details</u></b></section>
            <div class="form-group">
                <p>Payment Code (M-Pesa Code):</p>
                <input class="form-control" type="text" name="order[paymentStatus]" placeholder="Payment code">
            </div>
            <hr>
            <button class="btn-lg btn-default btn-block btn-primary" onclick="formData();" id="submit">Submit Order</button>

            </form>

        </div>
    </div>
    </div>
</body>

</html>

<script>
    function formData() {
        // var formData = $("neworder").serializeArray();
        alert("Order placed successfully");
        // var user = document.getElementById("userName").value;
        // var phoneNumber = document.getElementById("phoneNumber").value;
        // var location = document.getElementById("location").value;
        // var flower1 = document.getElementById("appleJack").value;
        // var flower2 = document.getElementById("heartGold").value;
        // var flower3 = document.getElementById("beluga").value;
        // var flower4 = document.getElementById("albatros").value;

        // CreateExcelSheet();
    }

    // function CreateExcelSheet() {
    //     var formData = $("neworder").serializeArray();
    //     let csv = "data:text/csv;charset=utf-8,"; // accept data as CSV

    //     formData.forEach(function(item) {
    //         csv += item.value + ";"; // concat form value on csv var and add ; to create columns (you can change to , if want)
    //     });

    //     console.log(csv);

    //     // var encodedUri = encodeURI(csv);
    // }
</script>

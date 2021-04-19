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
                        <input class="form-control" type="text" name="userName" placeholder="Sender's full name" required>
                    </div>
                    <div class="form-group">
                        <p>Phone Number:</p>
                        <input class="form-control" type="number" name="phoneNumber" placeholder="E.g. 070000000" required>
                        <p><em>Required for delivery</em></p>
                    </div>
                    <div class="form-group">
                        <p>Your Location:</p>
                        <input class="form-control" type="text" name="location" placeholder="Recipient's class" required>
                    </div>
                    <div class="form-group">
                        <section><b><u>Order Details</u></b></section>
                        <div class="form-group">
                            <label> <img class="img" src="./img/Apple Jack.jfif"> Apple Jack <br>Cost: Kshs. 300.00 </label>
                            <input class="form-control" type="number" min="0" name="order[daisyNum]" placeholder="Number of Daisys you wish to purchase" value="0">
                        </div>

                        <div class="form-group">
                            <label>  <img class="img" src="./img/heart of gold.png">Heart of Gold <br>Cost: Kshs. 320.00 </label>
                            <input class="form-control" type="number" min="0" name="order[daisyNum]" placeholder="Number of Daisys you wish to purchase" value="0">
                        </div>

                        <div class="form-group">
                            <label> <img class="img" src="./img/Beluga.png"> Beluga <br>Cost: Kshs. 250.00</label>
                            <input class="form-control" type="number" min="0" name="order[daisyNum]" placeholder="Number of Daisys you wish to purchase" value="0">
                        </div>
                        <label> <img class="img" src="./img/attitude.png"> Attitude <br>Cost: Kshs. 400.00</label>
                        <input class="form-control" type="number" min="0" name="order[daisyNum]" placeholder="Number of Daisys you wish to purchase" value="0">
                    </div>
                    <label> <img class="img" src="./img/alba.png"> Alba <br>Cost: Kshs. 500.00</label>
                    <input class="form-control" type="number" min="0" name="order[daisyNum]" placeholder="Number of Daisys you wish to purchase" value="0">
            </div>
            <label> <img class="img" src="./img/albatros.png"> Albatros <br>Cost: Kshs. 300.00 </label>
            <input class="form-control" type="number" min="0" name="order[daisyNum]" placeholder="Number of Daisys you wish to purchase" value="0">
        </div>
        <!--placeholder that initializes paymentStatus value-->
        <section><b><u>Payment Details</u></b></section>
        <div class="form-group">
            <p>Payment Code (M-Pesa Code):</p>
            <input class="form-control" type="text" name="order[paymentStatus]" placeholder="Payment code">
        </div>
        <hr>
        <button class="btn-lg btn-default btn-block btn-primary" onclick="validateForm();">Submit Order</button>

        </form>

    </div>
    </div>
    </div>
</body>

</html>

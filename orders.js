const form = document.forms[0];
var dataArray;
var userEmail = 'thecloud79@gmail.com';



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


function sendData() {
    const results = new FormData(form);
    const entries = results.entries();
    const data = Object.fromEntries(entries);
    console.log(data);
    dataArray = [data];

    // downloadCSV(dataArray);

}
// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const results = new FormData(form);
//     const entries = results.entries();
//     const data = Object.fromEntries(entries);
//     dataArray = [data];
//     console.log(dataArray);
//     // confirmOrder();
//     downloadCSV(dataArray);


// });

function convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(args) {

    var data, filename, link;
    var csv = convertArrayOfObjectsToCSV({
        data: dataArray
    });
    console.log(csv);
    if (csv == null) return;

    filename = args.filename || 'orders.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
    // var fileSend = link;
    window.open('mailto:' + userEmail + '?subject=Order%20Placement&body=Hi%20at%20Rose%20Flowers.%20Please%20find%20my%20order%20of%20flowers%20and%20delivery%20details.%20Thank%20you.%0D%0A%0D%0ARegards.' + link);


}
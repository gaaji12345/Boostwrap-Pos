$("#btnsave").click(function () {

    let roomId = $("#input1").val();
    let roomtype = $("#input2").val();
    let roomstatus = $("#input3").val();
    let roomprice = $("#input4").val();


    let row = `<tr><th>${roomId}</th> <th>${roomtype}</th> <th>${roomstatus}</th> <th>${roomprice}</th> </tr>`;
    console.log(row);

    $("#tb").append(row);
   // console.log(customerId, cusName, cusAddress, cusSalary);
});

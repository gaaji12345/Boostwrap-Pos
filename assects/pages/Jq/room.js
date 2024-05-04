
var rooms=[];

$("#btnsave").click(function () {

    let roomId = $("#input1").val();
    let roomtype = $("#input2").val();
    let roomstatus = $("#input3").val();
    let roomprice = $("#input4").val();


    var customerOb = {
        id :roomId,
        type : roomtype,
        status : roomstatus,
        price : roomprice

    }

    rooms.push(customerOb);

    loadAllrooms();

    btnRowClick();

    // let row = `<tr><th>${roomId}</th> <th>${roomtype}</th> <th>${roomstatus}</th> <th>${roomprice}</th> </tr>`;
    // console.log(row);
    //
    // $("#tb").append(row);
   // console.log(customerId, cusName, cusAddress, cusSalary);


});

  function loadAllrooms(){

      $('#tb').empty();
      for (var i of rooms){
          //console.log(i.id);
          let row = `<tr><th>${i.id}</th> <th>${i.type}</th> <th>${i.status}</th> <th>${i.price}</th> </tr>`;
          $('#tb').append(row);
      }

  }

function btnRowClick (){
    $('#tb>tr').click(function (){
        let id=$(this).children(":eq(0)").text();
        let type=$(this).children(":eq(1)").text();
        let status=$(this).children(":eq(2)").text();
        let price=$(this).children(":eq(3)").text();

        console.log(id,type,status,price);

        $('#input1').val(id);
        $('#input2').val(type);
        $('#input3').val(status);
        $('#input4').val(price);

    });

}



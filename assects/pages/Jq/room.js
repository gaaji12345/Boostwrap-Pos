
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

    doubleClick();




});

// $('#input1').on('keyup',function (event){
//     if (event.code=="Enter"){
//         let typeId=$('#input1').val();
//         let room= search(typeId);
//         if (customer!=null){
//             $('#input1').val(room.id);
//             $('#input2').val(room.type);
//             $('#input3').val(room.status);
//             $('#input4').val(room.price);
//         }else {
//             alert("There is no rooms....!"+typeId);
//         }
//     }
// });

$('#btndelete').click(function (){
    let deleteId= $('#input1').val();
    deleteRoom(deleteId);
});

$('#btnuPdate').click(function (){
    // for (let i = 0; i < customers.length; i++) {
    //     console.log(customers[i].id);
    // }

    //loadAll();
    let cusid=$('#input1').val();
    let respo=updateRoom(cusid);
    if (respo){
        alert("Update success");
    }else {
        alert("update fail..!");
    }



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
    $("#tb>tr").dblclick(function () {
        // $("#tb>tr").remove();
        // alert("fdfdf");
        $(this).remove();


    });

}

function doubleClick(){
    $('#tb>tr').dblclick(function (){
        let id=$(this).children(":eq(0)").text();
        let type=$(this).children(":eq(1)").text();
        let status=$(this).children(":eq(2)").text();
        let price=$(this).children(":eq(3)").text();

        console.log(id,type,status,price);

        $('#input1').remove(id);
        $('#input2').remove(type);
        $('#input3').remove(status);
        $('#input4').remove(price);

    });
}


// $('#input1').on('keydown',function (event){
//     if (event.key=='Enter') {
//         $('#input2').focus();
//     }
// });
//
// $('#input2').on('keydown',function (event){
//     if (event.key=='Enter') {
//         $('#input3').focus();
//     }
// });
//
// $('#input3').on('keydown',function (event){
//     if (event.key=='Enter') {
//         $('#input4').focus();
//     }
// });


function  searchRoom(id){
    for (let i=0;i<rooms.length;i++){
        if (rooms[i].id == id){
            return rooms[i];
        }
    }
}

$("#btnsearch").click(function () {
    var  searchId=$("#input5").val();
    var responce=searchRoom(searchId);
    if (responce){
        $("#input1").val(responce.id);
        $("#input2").val(responce.type);
        $("#input3").val(responce.status);
        $("#input4").val(responce.price);


    }else {
        clearAll();
        alert("No such Rooms...!")
    }

});

function deleteRoom(cId){
    let room=searchRoom(cId);
    if (room!=null){
        let indexof=rooms.indexOf(room);
        rooms.splice(indexof,1);
        loadAllrooms();
    }
}



// function search(cudId){
//     for (let room of rooms) {
//         if (room.id == cudId) {
//             return room;
//         }
//     }
//     return null;
// }

function updateRoom(rId){
    let room=searchRoom(rId);
    if (room!=null){
        room.id=$('#input1').val();
        room.type=$('#input2').val();
        room.status=$('#input3').val();
        room.price=$('#input4').val();
        loadAllrooms();
        return true;
    }else {
        return false;
    }


}




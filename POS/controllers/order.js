


// $('#cmbCusID').change(function () {
//     for (let i = 0; i < customers.length; i++) {
//         if ($(this).val()==customers[i].customerID){
//             $('#cName').val(customers[i].customerName);
//             loadAllCustIds();
//             break;
//         }
//     }
//     alert('gajji');
// });


// $("#cmbCusID").click(function () {
//     $(this).val($(this).val());
//     var customer = searchCustomer($(this).val());
//     $("#cName").val(customer.customerName);
//     $("#cAddress").val(customer.customerAddress);
//     $("#cSalary").val(customer.customerContact);
//
//     setAndTriggerValue($("#cName"), customer.customerID);
//     setAndTriggerValue($("#cAddress"), customer.customerAddress);
//     setAndTriggerValue($("#cSalary"), customer.customerContact);
//    // dateCheck();
//     alert("gaaji")
// });



// function setCusIds() {
//     $("#cmbCusID").empty();
//     customers.forEach(function (e) {
//         let id = e.customerID;
//         let select = `<option selected>${id}</option>`;
//         $("#cmbCusID").append(select);
//     });
// }

//
// $(document).ready(function() {
//     $("#order-add-item").prop("disabled", true);
//     $("#btnSubmitOrder").prop("disabled", true);
//     $("#order-clear").prop("disabled", true);
//     generateOrderId();
//     $('#order-thead').css({
//         'width': '100%',
//         'display': 'flex'
//     });
//     $('#order-thead>th').css({
//         'flex': '1',
//         'max-width': 'calc(100%/5*1)'
//     })
// });
//
// $("#btn-order,.order-nav").click(function (){
//     setCusIds();
//     setItemIds()
// });
// $("#order-clear,.order-nav").click(function (){
//     clearAll();
// });

// function loadAllCusIds(){
//    $('#cmbcId').empty();
//     for (let cus of customers){
//         $("#cmbcId").append(`<option>${cus.customerID}</option>`);
//
//     }
// }
// function generateOrderId() {
//
//     if (order.length == 0) {
//         $("#order-id").val("OID-0001");
//     } else if (order.length > 0) {
//         var id = order[order.length - 1].oid.split("-")[1];
//         var tempId = parseInt(id);
//         tempId = tempId + 1;
//         if (tempId <= 9) {
//             $("#order-id").val("OID-000" + tempId);
//         } else if (tempId <= 99) {
//             $("#order-id").val("OID-00" + tempId);
//         } else if (tempId <= 999) {
//             $("#order-id").val("OID-0" + tempId);
//         } else if (tempId <= 9999) {
//             $("#order-id").val("OID-" + tempId);
//         }
//     }
// }

// function searchOrder(id) {
//     return order.find(function (order) {
//
//         return order.oid == id;
//     });
// }

// function setCusIds() {
//     $("#cmbcId").empty();
//     customers.forEach(function (e) {
//         let id = e.customerID;
//         let select = `<option selected>${id}</option>`;
//         $("#cmbcId").append(select);
//     });
// }

// $("#cmbcId").click(function () {
//     $(this).val($(this).val());
//     var customer = searchCustomer($(this).val());
//     $("#cName").val(customers.customerName);
//     $("#cAddress").val(customers.customerAddress);
//     $("#cSalary").val(customers.customerContact);
//
//     setAndTriggerValue($("#cName"), customers.customerID);
//     setAndTriggerValue($("#cAddress"), customers.customerAddress);
//     setAndTriggerValue($("#cSalary"), customers.customerContact);
//    // dateCheck();
//     //alert("gaaji")
// });

function cusIds() {
    $('#cmbcId').empty();
    var Cus = '';
    for (var i = 0; i < customers.length; i++) {
        Cus += '<option value="' + customers[i].customerID + '">' + customers[i].customerID + '</option>';
    }
    $('#cmbcId').append(Cus);
}

$('#cmbcId').change(function () {
    for (let i = 0; i < customers.length; i++) {
        if ($(this).val()==customers[i].customerID){
            $('#cName').val(customers[i].customerName);
            $('#cAddress').val(customers[i].customerAddress);
            $('#cSalary').val(customers[i].customerContact);
            break;
        }
    }
});










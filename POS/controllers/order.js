


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

// $(document).ready(function() {
//     $("#order-add-item").prop("disabled", true);
//     $("#btnSubmitOrder").prop("disabled", true);
//     $("#order-clear").prop("disabled", true);
//    generateOrderId();
//     $('#order-thead').css({
//         'width': '100%',
//         'display': 'flex'
//     });
//     $('#order-thead>th').css({
//         'flex': '1',
//         'max-width': 'calc(100%/5*1)'
//     })
// });
let OrdertxtID="O00-00";
let oNo=1;


function cusIds() {
    $('#cmbcId').empty();
    var Cus = '';
    for (var i = 0; i < customers.length; i++) {
        Cus += '<option value="' + customers[i].customerID + '">' + customers[i].customerID + '</option>';
    }
    $('#cmbcId').append(Cus);
}

function setOrderId() {
    $('#order-id').val(OrdertxtID+oNo);
   // console.log(Number(oNo));
}
function generateOrderId() {

    if (order.length == 0) {
        $("#order-id").val("OID-0001");
    } else if (order.length > 0) {
        var id = order[order.length - 1].oid.split("-")[1];
        var tempId = parseInt(id);
        tempId = tempId + 1;
        if (tempId <= 9) {
            $("#order-id").val("OID-000" + tempId);
        } else if (tempId <= 99) {
            $("#order-id").val("OID-00" + tempId);
        } else if (tempId <= 999) {
            $("#order-id").val("OID-0" + tempId);
        } else if (tempId <= 9999) {
            $("#order-id").val("OID-" + tempId);
        }
    }
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

function itemIds() {

    var itemd = '';
    for (var i = 0; i < items.length; i++) {
        itemd += '<option value="' + items[i].itemId + '">' + items[i].itemId + '</option>';
    }
    $('#cmbIcode').append(itemd);
}

$('#cmbIcode').change(function () {
    for (let i = 0; i < items.length; i++) {
        if ($(this).val()==items[i].itemId){
            $('#itemName').val(items[i].itemName);
            $('#itemPrice').val(items[i].price);
            $('#iqtyOnHand').val(items[i].qty);
            break;
        }
    }
});

function placeOrder() {
    let order = {
        oid: "",
        date: "",
        customerID: "",
        orderdetails: []
    };

    let cusId = $("#cmbcId").val();
    let date = $("#order-date").val();
    let OId = $("#order-id").val();

    $('#order-table>tr').each(function () {
        let code = $(this).children().eq(0).text();
        let qty = $(this).children().eq(3).text();
        let price = $(this).children().eq(2).text();
        let orderDetails = {
            oid: OId,
            code: code,
            qty: parseInt(qty),
            unitPrice: parseFloat(price)
        };

        order.orderdetails.push(orderDetails);
        orderdetail.push(orderDetails);
    });

    order.oid = OId;
    order.date = date;
    order.customerID = cusId;
    orders.push(order);
}

$("#order-add-item").click(function () {
    let id = $("#cmbIcode").val();
    let name = $("#itemName").val();
    let price = $("#itemPrice").val();
    let qty = $("#orderQty").val();
    let total = parseFloat(price) * parseFloat(qty);
    let allTotal = 0;
    let itemExists = false;

    $('#order-table>tr').each(function (e) {
        let check =$(this).children().eq(0).text();
        if (id === check){
            let liQty = $(this).children().eq(3).text();
            let upQty = parseInt(liQty)+parseInt(qty);
            $(this).children().eq(1).text(name);
            $(this).children().eq(2).text(price);
            $(this).children().eq(3).text(upQty);
            $(this).children().eq(4).text(upQty * parseFloat(price));
            itemExists = true;
            return false;
        }
    });

    if (!itemExists){
        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${price}</td>
                     <td>${qty}</td>
                     <td>${total}</td>
                    </tr>`;

        $("#order-table").append(row);
        // $('#order-table').css({
        //     'width ': '101.8%',
        //     'max-height': '80px',
        //     'overflow-y': 'auto',
        //     'display': 'table-caption'
        // });
        // $('#order-table>tr>td').css({
        //     'flex': '1',
        //     'max-width': 'calc(100%/5*1)'
        // });
        // if ($("#order-table>tr").length > 1) {
        //     $('#order-table>tr').css({
        //         'width': '100%',
        //         'display': 'flex'
        //     });
        // } else {
        //     $('#order-table>tr').css({
        //         'width': '925px',
        //         'display': 'flex'
        //     });
        // }

    }

    $('#order-table>tr').each(function (e) {
        let full = $(this).children().eq(4).text();
        allTotal += parseFloat(full);
    });

    $("#total").text(allTotal);

    $("#subtotal").text(allTotal);
});





















$('#btnsaveitem').click(function (){
    saveItem();
    loadAllItems();

});

function saveItem() {
    let itemID=$('#txtitemcode').val();
    let itemName=$('#txtitemnamet').val();
    let itemPrice=$('#txtprice').val();
    let itemQty=$('#txtqty').val();

    let newItem = Object.assign({}, itemObj);
    newItem.itemId=itemID;
    newItem.itemName=itemName;
    newItem.price=itemPrice;
    newItem.qty=itemQty;

    items.push(newItem);

    //clearFeilds();
    // clearCustomerFeilds();
    loadAllItems();

}


function loadAllItems(){
    $('#tbItem').empty();
    for (let i = 0; i <items.length ; i++) {

        let id=items[i].itemId;
        let name=items[i].itemName;
        let price=items[i].price;
        let qty=items[i].qty;

        let row=`<tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${price}</td>
                    <td>${qty}</td>
                </tr>`
        console.log(id,name,price,qty);
        $("#tbItem").append(row);
        // bindCustomerTrEvents();
    }
}
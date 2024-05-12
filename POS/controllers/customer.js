
// let customerObj={
//     customerID:"",
//     customerName:"",
//     customerAddress:"",
//     customerContact:""
// }

//getAllCustomer();

$('#btnsaveCustomer').click(function (){
  saveCustomer();
  LoadAll();
  btnRowClick();


});


function saveCustomer() {
    let cusID=$('#txtCid').val();
    let cusName=$('#txtName').val();
    let cusAddress=$('#txtAddress').val();
    let cusContact=$('#txtContact').val();

    let newCustomer = Object.assign({}, customerObj);
    newCustomer.customerID=cusID;
    newCustomer.customerName=cusName;
    newCustomer.customerAddress=cusAddress;
    newCustomer.customerContact=cusContact;

        customers.push(newCustomer);
       // clearCustomerFeilds();
        LoadAll();

}


function LoadAll() {
    $('#tbCustomer').empty();
    for (let i = 0; i <customers.length ; i++) {

        let id=customers[i].customerID;
        let name=customers[i].customerName;
        let address=customers[i].customerAddress;
        let contact=customers[i].customerContact;

        let row=`<tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${address}</td>
                    <td>${contact}</td>
                </tr>`
        $("#tbCustomer").append(row);
       // bindCustomerTrEvents();
    }

}

function btnRowClick (){
    $('#tbCustomer>tr').click(function (){
        let id=$(this).children(":eq(0)").text();
        let name=$(this).children(":eq(1)").text();
        let address=$(this).children(":eq(2)").text();
        let contact=$(this).children(":eq(3)").text();

        console.log(id,name,address,contact);

        $('#txtCid').val(id);
        $('#txtName').val(name);
        $('#txtAddress').val(address);
        $('#txtContact').val(contact);

    });

}
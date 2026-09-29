



async function TypeOFCurrency() {
    var from=document.querySelector("#from").value;
var to=document.querySelector("#To").value;
    var key='7f67f38e915d6c3d023c72d3';

var request=`https://v6.exchangerate-api.com/v6/${key}/latest/${from}`;
var data=await fetch(request);
  var result=await data.json();
 // console.log("to:", to);
//console.log(result)
var toCurrency=result.conversion_rates[to];
return toCurrency; 
// var converted=` <h4 class="col-6">${result.base_code}</h4>
//     <h4 class="col-6">${result.conversion_rates.to}</h4>    `


// var content=createElement('div');
// content.classlist.add=("d-flex flex-column")
// content.innerHTML=converted;
}

 async function converted(){
    var amount=Number(document.querySelector("#amount").value)
    if(Number(amount)<0){
    document.querySelector("#Converted").innerHTML="enter correct  amount ";
    } else{
    var result=await TypeOFCurrency();
    var conevrtedAmount= amount*result;
    document.querySelector("#Converted").innerHTML=conevrtedAmount;
    }
}



document.querySelector("#amount").addEventListener("keyup",converted)
document.querySelector("#from").addEventListener("change",converted)
document.querySelector("#To").addEventListener("change",converted)


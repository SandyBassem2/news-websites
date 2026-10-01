
async function SelectCurrencyFrom(){
  var key='7f67f38e915d6c3d023c72d3'
    
var request=`https://v6.exchangerate-api.com/v6/${key}/codes`;
var data=await fetch(request);
  var result=await data.json();


    var selction=document.querySelector('#from')
   
console.log(result);

for(var i=0;i<result.supported_codes.length-1;i=i+1){

    var optionsValue=document.createElement('option')
   
    optionsValue.value=result.supported_codes[i][0];
    
     optionsValue.textContent=result.supported_codes[i][1];
    selction.appendChild(optionsValue);
    
 

}
}

async function SelectCurrencyTo(){
  var key='7f67f38e915d6c3d023c72d3'
    
var request=`https://v6.exchangerate-api.com/v6/${key}/codes`;
var data=await fetch(request);
  var result=await data.json();


    var selction=document.querySelector('#To')
   
console.log(result);

for(var i=0;i<result.supported_codes.length-1;i=i+1){

    var optionsValue=document.createElement('option')
   
    optionsValue.value=result.supported_codes[i][0];
    
     optionsValue.textContent=result.supported_codes[i][1];
    selction.appendChild(optionsValue);
    
 

}
}




SelectCurrencyTo()
SelectCurrencyFrom()







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
    document.querySelector("#Converted").innerHTML=conevrtedAmount.toFixed(2);
    }
}



document.querySelector("#amount").addEventListener("keyup",converted)
document.querySelector("#from").addEventListener("change",converted)
document.querySelector("#To").addEventListener("change",converted)


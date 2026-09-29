
async function getCurrencydata(type){
  var key='7f67f38e915d6c3d023c72d3';
 // var currenyType=['USD','SAR','EUR'];
  var request=`https://v6.exchangerate-api.com/v6/${key}/latest/${type}`;
  var data=await fetch(request);
  var result=await data.json();
 // console.log(result);
   var currencyRow = document.createElement('div')
    currencyRow.classList.add('row')
    var currencyData = 
    `    
    <h4 class="col-6">${result.base_code}</h4>
    <h4 class="col-6">${result.conversion_rates.EGP}EGP</h4>    
    `
    currencyRow.innerHTML = currencyData;
    document.querySelector('#currency').appendChild(currencyRow) 

}

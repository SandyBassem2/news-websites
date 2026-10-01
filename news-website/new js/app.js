
// console.log(request);
async function getWeatherdata() {
  var key=`d9d5f2df2d39459c886130704262009`;
var city=`Asyut`
var request=`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;
var data= await fetch(request);
var result=await data.json();  
console.log(result);
document.querySelector('#temp h2').innerText=result.current.temp_c+'C'
document.querySelector('#temp h3').innerText=result.location.name
document.querySelector("#temp img").setAttribute('src','http:'+ result.current.condition.icon)

}






//description
//image_url
//source_name




getSportsData();
getNewsData('sports')
getNewsData('Entertainment')
getNewsData('Politics')
getCurrencydata('USD')
getCurrencydata('SAR')
getCurrencydata('EUR')
getWeatherdata()


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
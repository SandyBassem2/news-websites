
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



async function getliveMatchesNews(){
  var key='69b85060b25dcba844f5d68d64732a04ff520027b85051f205712babff62e90f';

  var request=`https://live-football-api.com/api/v1/matches?api_key=${key}&date=2026-09-21&lang=en`;
  var data=await fetch(request);
  var result =await data.json();
  //console.log(result.data.matches[0])
  
for(var m=0;m<7;m=m+1){
  var matchesNews=`  <p class="col-4">${result.data.matches[m].away.name}</p>
                        <section class="col-1">
                            <img src="${result.data.matches[m].away.logo}" style="width: 30px;" alt="">
                        </section>
                        <p class="col-2">${result.data.matches[m].away.score}:${result.data.matches[m].home.score}</p>
                        <section class="col-1">
                            <img src="${result.data.matches[m].home.logo}" style="width: 30px;" alt="">
                        </section>
                         <p class="col-4">${result.data.matches[m].home.name}</p>

`
var matcheDiv=document.createElement("div");
matcheDiv.classList.add('row')
matcheDiv.innerHTML=matchesNews;
document.querySelector("#matches").appendChild(matcheDiv);
}
}



//description
//image_url
//source_name




getliveMatchesNews();
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
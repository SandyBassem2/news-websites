
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

async function getCurrencydata(){
  var key='7f67f38e915d6c3d023c72d3';
  var currenyType=['USD','SAR','EUR'];
  var request=` https://v6.exchangerate-api.com/v6/${key}/latest/${currenyType[0]}`;
  var data=await fetch(request);
  var result=await data.json();
  console.log(result);
  document.querySelector('#currency div:nth-of-type(1) h4:last-child').innerText = result.conversion_rates.EGP+'EGP'

   var request=` https://v6.exchangerate-api.com/v6/${key}/latest/${currenyType[1]}`;
  var data=await fetch(request);
  var result=await data.json();
  console.log(result);
  document.querySelector('#currency div:nth-of-type(2) h4:last-child').innerText = result.conversion_rates.EGP+'EGP'

  
   var request=` https://v6.exchangerate-api.com/v6/${key}/latest/${currenyType[2]}`;
  var data=await fetch(request);
  var result=await data.json();
  console.log(result);
  document.querySelector('#currency div:nth-of-type(3) h4:last-child').innerText = result.conversion_rates.EGP+'EGP'

}


async function getNewsData() {

  var key='pub_293b990d5875437a947f8f450eb9c704';
   var newsCategory=['Sports','Entertainment','Politics'];

  var request=`https://newsdata.io/api/1/latest?apikey=${key}&country=eg&category=${newsCategory[0]}`;
  var data=await fetch(request);
  var result =await data.json();
console.log(result.results[1]);
 for( var i=0;i<3;i=i+1){
var sportsnews=`   <img class="img-fluid" src="${result.results[i].image_url}">
                        <article class="row">
                            <p class="col-6">${result.results[i].pubDate}</p>
                            <p class="col-6 " >
                                <span class="badge bg-success">${result.results[i].source_name}</span>
                            </p>
                        </article>
                        <h4>${result.results[i].title}</h4>`
  


var section=document.createElement('section');
section.classList.add('col-3')
section.innerHTML=sportsnews;
document.querySelector("#sportsNews").appendChild(section);
 }




  var request=`https://newsdata.io/api/1/latest?apikey=${key}&country=eg&category=${newsCategory[1]}`;
  var data=await fetch(request);
  var result =await data.json();
console.log(result.results);
 for( var i=4;i<7;i=i+1){
var entertainmentnews=`   <img class="img-fluid" src="${result.results[i].image_url}">
                        <article class="row">
                            <p class="col-6">${result.results[i].pubDate}</p>
                            <p class="col-6 " >
                                <span class="badge bg-success">${result.results[i].source_name}</span>
                            </p>
                        </article>
                        <h4>${result.results[i].title}</h4>`
  


var mysection=document.createElement('section');
mysection.classList.add('col-3')
mysection.innerHTML=entertainmentnews;
document.querySelector("#Entertainment").appendChild(mysection);
 }



 
  var request=`https://newsdata.io/api/1/latest?apikey=${key}&country=eg&category=${newsCategory[2]}`;
  var data=await fetch(request);
  var result =await data.json();
console.log(result.results);
 for( var i=0;i<3;i=i+1){
var politicsnews=`   <img class="img-fluid" src="${result.results[i].image_url}">
                        <article class="row">
                            <p class="col-6">${result.results[i].pubDate}</p>
                            <p class="col-6 " >
                                <span class="badge bg-success">${result.results[i].source_name}</span>
                            </p>
                        </article>
                        <h4>${result.results[i].title}</h4>`
  


var mysection2=document.createElement('section');
mysection2.classList.add('col-3')
mysection2.innerHTML=politicsnews;
document.querySelector("#Politics").appendChild(mysection2);
 }


}






async function getliveMatchesNews(){
  var key='69b85060b25dcba844f5d68d64732a04ff520027b85051f205712babff62e90f';

  var request=`https://live-football-api.com/api/v1/matches?api_key=${key}&date=2026-09-21&lang=en`;
  var data=await fetch(request);
  var result =await data.json();
  console.log(result.data.matches[0])
  
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
getNewsData()
getCurrencydata()
getWeatherdata()



// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
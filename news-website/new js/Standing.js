
async function Selectleague(){
 var sportsApiKey = '937d6c93075d91baa971301a77b3c965'
    var sportsApiUrl = "https://v3.football.api-sports.io//leagues"
    var myHeaders = new Headers();
    myHeaders.append("x-apisports-key", sportsApiKey);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    var response = await fetch(sportsApiUrl, requestOptions)
    var data = await response.json()
    console.log(data)


    var selction=document.querySelector('#League')
   


for(var i=0;i<50;i=i+1){

 if(data.response[i].league.name==data.response[i+1].league.name){
    continue;
 }else{

    var optionsValue=document.createElement('option')
   
    optionsValue.value=data.response[i].league.id;
    
     optionsValue.textContent=data.response[i].league.name;
    selction.appendChild(optionsValue);
    
    }

}
}
   
 async function leagueInfo(){
  var sportsApiKey = '937d6c93075d91baa971301a77b3c965' 
     var league=document.querySelector('#League').value;
     var sportsApiUrl =  `https://v3.football.api-sports.io/standings?league=${league}&season=2022`
     var myHeaders = new Headers();
     myHeaders.append("x-apisports-key", sportsApiKey);
     var requestOptions = {
         method: 'GET',
         headers: myHeaders,
         redirect: 'follow'
     };

     var response = await fetch(sportsApiUrl, requestOptions)
     var data = await response.json()
       console.log(data)
       return data;

 }


 
async function start() {
   var selectedLeageu= await Selectleague();
  
async function returnData(){
  var info=await leagueInfo()
  


 var tableContent=document.createElement('tr')

    var content=` 
                   
                        <td>${info.response[0].league.name}</td>
                        <td>${info.response[0].league.standings[0][0].all.played}</td>
                        <td>${info.response[0].league.standings[0][0].all.win}</td>
                        <td>${info.response[0].league.standings[0][0].all.lose}</td>
                        <td>${info.response[0].league.standings[0][0].all.goals.for}</td>
                        <td>${info.response[0].league.standings[0][0].all.goals.against}</td>

                  
                      
                    
                    `
tableContent.innerHTML=content;
 document.querySelector('#infoTable').appendChild(tableContent)
}

  document.querySelector('#League').addEventListener("change",returnData)
}

start();



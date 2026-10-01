async function getSportsData(){
    var sportsApiKey = '937d6c93075d91baa971301a77b3c965'
    var sportsApiUrl = "https://v3.football.api-sports.io/fixtures?live=all&timezone=Africa/Cairo"
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


for(var i=0;i<data.response.length;i=i+1){
    var matchRow = document.createElement('div')
    matchRow.classList.add('row')
    var matchData =
    `
    <hr>
    <h4 class="col-12 text-start"><img style="width: 50px" src="${data.response[i].league.logo}"> ${data.response[i].league.name}</h4> 
    <hr>   
    <p class="col-4">${data.response[i].teams.home.name}</p>
    <section class="col-1">
        <img src="${data.response[i].teams.home.logo}" style="width: 30px;" alt="">
    </section>
    <p class="col-2">${data.response[i].goals.home} : ${data.response[i].goals.away}</p>
    <section class="col-1">
        <img src="${data.response[i].teams.away.logo}" style="width: 30px;" alt="">
    </section>
    <p class="col-4">${data.response[i].teams.away.name}</p>
    `
    matchRow.innerHTML = matchData
    document.querySelector('#live-matches').appendChild(matchRow)
}
}
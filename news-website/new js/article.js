

async function showData(){
  var searchid=new URLSearchParams(window.location.search);
 var id = searchid.get("id");
    var key='pub_293b990d5875437a947f8f450eb9c704';

  var request=`https://newsdata.io/api/1/latest?apikey=${key}&id=${id}`;
  var data=await fetch(request);
  var result =await data.json();
//console.log(result);
    //var article=result.results[i];

    var content=`<h4 class="mt-3 mb-3 text-primary text-center">${result.results[0].title}</h4>
   
      <article class="row">
      
                              
                                <div class=" card bg-light p-3 ms-3 d-flex justify-content-center align-items-center flex-column w-100">

                            <p class="text-center">${result.results[0].description}</p>
                               <p>
                                <span class="badge bg-success">${result.results[0].source_name}</span>
                            </p> 
                              <p class="text-end">${result.results[0].pubDate}</p>
                            <div>
                       
                        </article>
    `
    var section=document.createElement('div');
section.classList.add('row')
section.innerHTML=content;
document.querySelector(`#News`).appendChild(section);

}
showData()
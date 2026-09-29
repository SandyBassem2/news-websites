

async function getNewsData(category) {

  var key='pub_293b990d5875437a947f8f450eb9c704';
   //var newsCategory=['Sports','Entertainment','Politics'];

  var request=`https://newsdata.io/api/1/latest?apikey=${key}&country=eg&category=${category}`;
  var data=await fetch(request);
  var result =await data.json();
//Console.log(result);
 for( var i=0;i<3;i=i+1) {

    
var content=`  

                      <a href='article.html?id=${result.results[i].article_id}'>
                 <img class="img-fluid" src="${result.results[i].image_url}">
                
                        <article class="row">
                            <p class="col-6">${result.results[i].pubDate}</p>
                            
                            <p class="col-6 " >
                                <span class="badge bg-success">${result.results[i].source_name}</span>
                            </p>
                        </article>
                        <h4>${result.results[i].title}</h4>
                          </a>
                     `
var section=document.createElement('section');
section.classList.add('col-3')
section.innerHTML=content;
document.querySelector(`#${category}`).appendChild(section);
 


}
}




//var res=fetch("https://data.covid19india.org/v4/min/data.min.json");
//res.then((data)=>data.json())
//.then((data1)=>foo(data1));



    
var res=fetch("https://jsonplaceholder.typicode.com/posts");
res.then((data)=>data.json())
.then((data1)=>foo(data1));


function foo(data1){
for(var i=0;i<=10;i++){
   console.log(data1[i]);
    var div=document.createElement("div");
    div.style.color="green";
    div.style.fontSize="32px";
   div.innerHTML=`${data1[i]}`;
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5>${data1[i].id}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data1[i].title}</h6>
      <p>${data1[i].body}</p>

   
      </div>
 </div>`;
    document.body.append(div);
}
}

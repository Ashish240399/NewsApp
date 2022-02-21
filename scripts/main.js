async function apiCall(url) {
     try {
         let res=await fetch(url);
         let data=await res.json();
         return (data);
     } catch (error) {
         console.log(error);
     }

    //add api call logic here


}


function appendArticles(articles, main) {
      articles.map((el)=>{
          let div=document.createElement("div");
          div.setAttribute("class","picture");
          let img=document.createElement("img");
          img.src=el.urlToImage;
          let p1=document.createElement("p");
          p1.textContent="Title : "+el.title;
          let p2=document.createElement("p");
          p2.textContent="Description : "+el.description;
          div.append(img,p1,p2);
          div.onclick=()=>{
              localStorage.setItem("article",JSON.stringify(el));
              window.location.href="news.html"
          }
          main.append(div);
      })
    //add append logic here

}

export { apiCall, appendArticles }
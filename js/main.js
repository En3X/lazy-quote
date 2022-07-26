var modal = document.querySelector("#modal-dev");
var main = document.querySelector("main");
document.querySelector("body")
    .addEventListener('contextmenu',e=>{
       e.preventDefault();
       modal.style.display = "block";
       main.style.display = "none";
})
document.querySelector("#close-modal")
    .addEventListener('click',e=>{
       modal.style.display = "none";
       main.style.display = "block";
})

document.querySelector("main")
.addEventListener('click',()=>{
    fetchNewQuote()
})
fetchNewQuote();
function fetchNewQuote(){
    var api = "https://type.fit/api/quotes";
    fetch(api)
    .then(response=>{
        return response.json()
    }).then(data=>{
        mainData = data[Math.floor(Math.random()*data.length)];
        setMainData(mainData);
    })
}
function setMainData(data) {
    console.log(data);
    document.querySelector("#quote-main")
    .textContent = data.text;
    if (data.author == null || data.author == undefined) {
        data.author = "Unknown Author";
    }
    document.querySelector("#author")
    .textContent = "- "+data.author;
}


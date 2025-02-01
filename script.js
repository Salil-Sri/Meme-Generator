let head = document.querySelector('.head');
let image = document.querySelector('.image');
let sapna = document.querySelector('.sapna');
const btn = document.querySelector('.btnn');
console.log("hello");
function meme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=>res.json())
    .then((data)=>{
       const{author,title,url} = data
       console.log(url);
      head.innerHTML = `${title}`
      image.src= url
      sapna.innerHTML = `Made By: ${author}`
    })
}

meme()
btn.addEventListener('click', ()=>{
    meme()
})


const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e)=>{
    const id = e.target.dataset.id; 
    // (property) Event.target: EventTarget
    // Returns the object to which event is dispatched (its target).

    if(id){
        btns.forEach(btn=>{
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
    
        articles.forEach(article=>{
           article.classList.remove("active"); 
        });
    
        const selArticle = document.querySelector(`#${id}`);
        selArticle.classList.add("active");
    }
});

// My code
// const btns = document.querySelectorAll(".tab-btn");
// const contents = document.querySelectorAll(".content");

// btns.forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         const id = btn.dataset.id;

//         if(id === history){
//             active(btn, id);
//         }else if(id === vision){
//             active(btn, id);
//         }else{
//             active(btn, id);
//         }    
//     });
// });

// function active(clickBtn, id){
//     clickBtn.classList.add("active");

//     contents.forEach(content=>{
//         if(content.id === id){
//             content.classList.add("active");
//         }else{
//             content.classList.remove("active"); 
//         }
//     });

//     btns.forEach((btn)=>{
//         if(btn != clickBtn){
//             btn.classList.remove("active");
//         }
//     });
// }


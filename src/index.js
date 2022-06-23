document.addEventListener('DOMContentLoaded',displayEverything)

function displayEverything(){
    getCharacter()
    fetchCharacters()
}

function getCharacter(){
    fetch('https://rickandmortyapi.com/api/character/2')
    .then(response => response.json())
    .then(response => {
        handleDisplay(response)

        console.log(response)})
    .catch(err => console.error(err));

}

function handleDisplay(obj){
    const main =document.querySelector('main')
    main.innerHTML=`
        <div class='card'>
        <img src=${obj.image} alt="John" style="width:100%">
        <h1 class="location">${obj.name}</h1>
        <p class="title">${obj.gender}</p>
        <p class="location">${obj.status}</p>
        <p class="location" >${obj.location.name}</p>
        <span class="location">Likes:<span id="likes" >0</span></sapn>
        <p><button class='like location'>Like</button></p>
        </div>
        <section>
        <form id="comment-form">   
        <textarea id="review" class="review" ></textarea>
        <button type="submit">Comment</button>
        <h3>Comments:</h3>
          </form>     
           <ul id="comment-list">  
           </ul>
        </section>`
       handleForm()
          //Updating Likes
         let count=0
         document.querySelector('.like').addEventListener('click',()=>{
         count++
         document.querySelector("#likes").innerHTML=count
          })
}
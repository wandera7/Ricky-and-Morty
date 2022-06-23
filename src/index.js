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


function fetchCharacters(){    
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(response => {
            navCharacters(response.results)            
            console.log(response.results)})
        .catch(err => console.error(err));
}

function navCharacters(characters){
    const ul=document.querySelector('.nav');
    ul.remove();
    characters.forEach((character) => {
        const ul=document.createElement('ul');
        ul.innerHTML=`
        <ul class='nav'>
        <li>${character.name}</li>
        </ul>
        `
      //To be able to change the display
      document.querySelector('nav').appendChild(ul);
      ul.addEventListener('click',()=>{
         console.log('clicked')
         handleDisplay(character)
      })  
    });
}


function handleForm(){
    document.querySelector('#comment-form').addEventListener('submit',(e)=>{
        const li=document.createElement('li')
        let btn=document.createElement('button');
        btn.classList.add("delete")
        btn.textContent='X';
        e.preventDefault()
        btn.addEventListener('click',deleteTask)
        let value =document.querySelector('#review').value
        li.innerHTML=`${value}`
        document.querySelector('#comment-list').appendChild(li)
        li.appendChild(btn)
     document.querySelector('#comment-form').reset(' ')
    })
}

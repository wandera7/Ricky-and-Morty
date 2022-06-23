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
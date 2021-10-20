const input = document.querySelector('input');
const nome = document.querySelector('.pokeinfos .name');
const h2 = document.querySelectorAll('h2');
const habilidades = document.querySelector('.pokeinfos .abilities');
const img = document.querySelector('img');

input.addEventListener('change', function(event){
    h2.forEach(x => {
        x.classList.add('escondido');
    })
    img.src = "";
    habilidades.textContent =""
    const pokemonPesquisado = event.target.value;
    const pokePromise = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonPesquisado}/`);
    pokePromise.then(function(response){
        const pokeResponsePromise = response.json();

        pokeResponsePromise.then(function(body){
           h2.forEach(x => {
               x.classList.remove('escondido');
           })
            nome.textContent = body.name;
            img.src = body.sprites.front_shiny;
            for(let item of body.abilities){
                habilidades.textContent += item.ability.name + "";
            }
           

           
        })
    })
})
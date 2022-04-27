//console.log(beers)



const beerSectionComponent = function (inner, id){
    return `
        <section id="${id}">${inner}</section>
    `
}

const beerCardComponent = function (name, brand, type){
    return `
    <div class="card">
        <p>${name} - ${brand} - ${type}</p>  
    </div>
    `
}

const loadEvent = function (){
    const rootElement = document.getElementById("root")

    let innerSection = "";
    for (const beer of beers.cards) {
        innerSection += beerCardComponent(beer.title, beer.sub, beer.text)
    }
    rootElement.insertAdjacentHTML("beforeend", beerSectionComponent(innerSection));

}

window.addEventListener("load", loadEvent)

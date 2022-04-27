//console.log(beers)

//komponensünk nevét egyes számban használjuk! --> pl beerCard Component

const beerCardComponent = function (name, company, type){
    return `
    <div class="card">
        <div class="beer name">${name}</div>    
        <div class="beer company">${company}</div>    
        <div class="beer type">${type}</div>    
    </div>
    `
}
// itt vázlatolunk és megtervezzük, hogyan nézzen ki a card-unk
//azért kell a függvény, hogy folyamatosan be tudjunk küldeni ide dolgokat - ha sima string lenne, akkor nem lehetne beletenni változó értékeket

const beerTitleComponent = `
<h1>Beers</h1>
`

const loadEvent = function (){
    const rootElement = document.getElementById("root");

    console.log(rootElement)

    rootElement.insertAdjacentHTML("beforeend", beerTitleComponent);
    
    //insertAdjacentHTML: két string elemet kér ez a metódus: egy position és egy olyan string, amit html-lé tud konvertálni
    
    console.log(beers.logo)
    
    //fontos, hogy a beer egyes számban legyen
    for (const beer of beers.cards) {
        console.log(beer);
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text));
        //()-ek fontosak a beerCardCompnent után!!! meg kell hívni a függvényt!
    }
    //ezzel a ciklussal végiglépkedek egy tömb elemein (beers.cards kulcson lévő tömbön); a tömb elemeit el kell neveznem --> iterátor (beer) -- minden {} egy elem
}
//TÖMB --> FOR CIKLUS
// ha van adatom és nem kell elszámolni akármeddig, akkor a for of ciklust használjuk
//ha nincs adat és nekünk kell elszámolgatni, akkor a sima for loop-t kell használni (a hosszú, i++-os)

window.addEventListener("load", loadEvent)
//addEventListener: eseményfigyelő
//a window-al hívjuk meg az eseményfigyelőt
//enélkül a páros nélkül semmi nem történik a kódban, minden script.js-ben benne kell lennie
//ezen az eseményfigyelőn belül férünk hozzá a document-ünkhöz



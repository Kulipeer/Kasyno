let x = Math.floor(Math.random() * 4);
let z = Math.floor(Math.random() * 4);
let y = Math.floor(Math.random() * 4);
let kasa = document.getElementById("Kasa")
let kasa2 = 0
const bigwin = document.getElementById("BigWin");
const rolada = document.getElementById("Rolada");
const redcoin = document.getElementById("RedCoin");
const smallwin = document.getElementById("SmallWin");
const hakari1 = document.getElementById("Hakari");
const hakari2 = document.getElementById("Hakari3");
const tukadonka = document.getElementById("Hakari2");
const bgmusic = document.getElementById("btd");
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
let tab1 = []
let wr=document.getElementById("wr")
const Black = document.getElementById("WifeHiter")
wr2 = 0
let timeer = 500
let timeer2 = 800
let cooldown = 0
let alwayswin = 0

const hakarimg = document.querySelector("#hakarimg")
const kasiora = document.querySelector("#kasiora")



bgmusic.play()
wr.textContent = 0+"%"
kasa.textContent = kasa2
console.log(x)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

rolada.play()
rolada.pause()
bigwin.play()
bigwin.pause()
smallwin.play()
smallwin.pause()
redcoin.play()
redcoin.pause()
hakari1.play()
hakari1.pause()
hakari2.play()
hakari2.pause()
tukadonka.play()
tukadonka.pause()
Black.classList.remove("FinalFrontier")
Black.classList.add("Hidden")


let Ride = document.querySelector(".Ride")
let sekret = document.querySelector(".Secret")
console.log(sekret)
console.log(Ride)
sekret.addEventListener("click",Sekretne);

function Sekretne()
{
    if(alwayswin == 0)
    {
        alwayswin = 1
    }
    else{
        alwayswin = 0
    }
    cooldown = 0
}

Ride.addEventListener("click",Losowanie);

function Losowanie(){
    Black.classList.remove("FinalFrontier")
    Black.classList.add("Hidden")
    tukadonka.pause()
    
    if(one.classList.contains("Rolling"))
    {
        return;
    }
    if(cooldown == 1)
    {
        return;
        console.log("dupa")
    }
cooldown = 1
Ride.classList.add("Animacjono")

console.log(Ride.classList)
    
x = Math.floor(Math.random() * 4);
z = Math.floor(Math.random() * 4);
y = Math.floor(Math.random() * 4);

console.log(x,y,z)

if(x==y && x!=3)
{
    z=x
}
if(z==x && x!=3)
{
    y=x
}
if(y==z && z!=3)
{
    x=z
}
if(alwayswin == 1)
{
    x=3
    z=3
    y=3 
}

rolada.play()
if(x==3 && y==3 && z==3)
{
}



console.log(x,y,z)


one.classList.forEach(className => {
    if (className.includes("Rand")) {
        one.classList.remove(className);
    }
});
two.classList.forEach(className => {
    if (className.includes("Rand")) {
        two.classList.remove(className);
    }
});
three.classList.forEach(className => {
    if (className.includes("Rand")) {
        three.classList.remove(className);
    }
});
one.classList.add("Rolling")

two.classList.add("Rolling")

three.classList.add("Rolling")


setTimeout(wylosowane,timeer)
}

function bgback(){
document.body.style.backgroundImage = "";
tukadonka.pause()
tukadonka.currentTime = 0;
cooldown = 0
alwayswin = 0
timeer = 500
timeer2 = 800
kasiora.style.opacity = 0;
hakarimg.style.opacity = 0;
Black.classList.remove("FinalFrontier")
Black.classList.add("Hidden")
bgmusic.play()
}

async function wylosowane(){




redcoin.play()
one.classList.remove("Rolling")
one.classList.add("Rand" + (x+1))
await sleep(timeer2);
redcoin.play()
two.classList.remove("Rolling")
two.classList.add("Rand" + (y+1))
await sleep(timeer2);
redcoin.play()
three.classList.remove("Rolling")
three.classList.add("Rand" + (z+1))

/*/x==3 && y==3 && z==3
/*/
rolada.pause()
if(x==3 && y==3 && z==3)
{
    kasa2=kasa2+500
    tukadonka.play()
    
    document.body.style.backgroundImage = "url('hakari22.gif')";
    setTimeout(bgback, 13000)
    tab1.push(1);
    kasiora.style.opacity = 1;
    hakarimg.style.opacity = 1;
    Black.classList.add("FinalFrontier")
    Black.classList.remove("Hidden")
    bgmusic.pause()
}
else if( x==y && x==z)
{
kasa2 = kasa2+50
tab1.push(1);
smallwin.play()
cooldown = 0
}
else{
    tab1.push(0);
}
console.log(tab1)
wr2 = tab1.reduce((a, b) => a+b,0);
wr.textContent = Math.ceil((wr2 / tab1.length)*10000)/100+"%";
kasa.textContent = kasa2
Ride.classList.remove("Animacjono")
cooldown = 0
rolada.currentTime = 0;

}
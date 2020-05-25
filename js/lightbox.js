const deKleintjes = document.querySelectorAll('.kleintje');
const watWegMoet = document.querySelectorAll('.grootje');

// de Nodelist watWegMoet in een array stoppen
const alleInfo = []

for(let i=0; i<watWegMoet.length; i++) {
    alleInfo.push(watWegMoet [i]);
    // element uit de DOM verwijderen
    watWegMoet [i].remove(); 
} 

const maakSluitKnop = document.createElement('i');
maakSluitKnop.className = 'fas fa-times-circle sk';
maakSluitKnop.addEventListener('click', this.verwijderModaal)

function maakModaal(num) {
    console.log('geklikt op '+num)
    console.log(alleInfo[num].innerHTML)
    let modaal = document.createElement('div');
    modaal.id= 'modaal';
    modaal.addEventListener('click', this.verwijderModaal);
    let modaalInhoud = document.createElement('div');
    modaalInhoud.className = 'modaal-inhoud';
    modaalInhoud.innerHTML = alleInfo[num].innerHTML;
    modaalInhoud.addEventListener("click", function(e) {
        e.stopPropagation();
    })
    modaalInhoud.prepend(maakSluitKnop);
    modaal.append(modaalInhoud);
    document.body.append(modaal);
}

// Klik gebeurtenis op de kleine div's

function verwijderModaal() {
    document.getElementById("modaal").remove();
}

for(let i=0; i<deKleintjes.length; i++) {
    deKleintjes[i].addEventListener('click', function() {
        maakModaal(i)
    });
}
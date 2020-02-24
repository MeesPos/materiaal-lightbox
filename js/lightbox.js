const deKleintjes = document.querySelectorAll('.kleintje');
const watWegMoet = document.querySelectorAll('.grootje');

// de Nodelist watWegMoet in een array stoppen
const alleInfo = []

for(let i=0; i<watWegMoet.length; i++) {
    alleInfo.push(watWegMoet [i]);
    // element uit de DOM verwijderen
    watWegMoet [i].remove(); 
} 

function maakModaal(num) {
    console.log('geklikt op '+num)
    console.log(alleInfo[num].innerHTML)
    let modaal = document.createElement('div');
    modaal.id= 'modaal';
    let modaalInhoud = document.createElement('div');
    modaalInhoud.className = 'modaal-inhoud';
    modaalInhoud.innerHTML = alleInfo[num].innerHTML;
    modaal.append(modaalInhoud);
    document.body.append(modaal);
}

// Klik gebeurtenis op de kleine div's

for(let i=0; i<deKleintjes.length; i++) {
    deKleintjes[i].addEventListener('click', function() {
        maakModaal(i)
    });
}
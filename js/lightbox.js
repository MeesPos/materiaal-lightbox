const deKleintjes = document.querySelectorAll('.kleintje');
const watWegMoet = document.querySelectorAll('.grootje');

// de Nodelist watWegMoet in een array stoppen
const alleInfo = []

for(let i=0; i<watWegMoet.length; i++) {
    alleInfo.push(watWegMoet [i]);
    // element uit de DOM verwijderen
    watWegMoet [i].remove();
} 
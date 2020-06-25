const modaalObj = {
    // Eigenschappen
    deKleintjes : document.querySelectorAll('.kleintje'),
    watWegMoet  : document.querySelectorAll('.grootje'),
    alleInfo    : [],
    // Methods
    verwijderModaal: function() {
        document.getElementById('modaal').remove();
    },
    maakModaal: function(num) {
        console.log('geklikt op '+num)
        console.log(this.alleInfo[num]);
        let modaal = document.createElement('div');
        modaal.id= 'modaal';
        modaal.addEventListener('click', this.verwijderModaal);
        let modaalInhoud = document.createElement('div');
        modaalInhoud.className = 'modaal-inhoud';
        modaalInhoud.innerHTML = this.alleInfo[num].innerHTML;
        modaalInhoud.addEventListener("click", function(e) {
            e.stopPropagation();
        })
        modaalInhoud.prepend(maakSluitKnop);
        modaal.append(modaalInhoud);
        document.body.append(modaal);
    },

    initials: function() {
        for(let i=0; i<this.deKleintjes.length; i++) {
            this.alleInfo.push(this.deKleintjes[i]);
            // element uit de DOM verwijderen
            this.deKleintjes[i].remove(); 
        }

        for(let i=0; i<this.watWegMoet.length; i++) {
            this.watWegMoet[i].addEventListener('click', function() {
                modaalObj.maakModaal(i)
            })
        }
    }
}

const maakSluitKnop = document.createElement('i');
maakSluitKnop.className = 'fas fa-times-circle sk';
maakSluitKnop.addEventListener('click', this.verwijderModaal);
// due campi di input: 1. nome contatto 2. numero contatto
// un bottone per aggiungere un contatto
// un bottone per mostrare o nascondere i contatti
// un bottone per rimuovere un contatto
// modificare contatto



//ELEMENTI CATTURATI:
//tbody table
let contattiWrapper = document.querySelector('#contattiWrapper');
//buttons
let btnShowContacts = document.querySelector('#btnShowContacts');
let btnAddContact = document.querySelector('#btnAddContact');
let btnRemoveContact = null;
//inputs
let inputName = document.querySelector('#inputName');
let inputNumber = document.querySelector('#inputNumber');



//oggetto rubrica
let rubrica = {
    'contatti' : [
        {'nome' : 'Ciccio', 'numero' : 333444555666 },
        {'nome' : 'Camillo', 'numero' : 444555666777 },
        {'nome' : 'Simone', 'numero' : 555666777888 },
    ],

    //metodo: mostra contatti
    'showContatcs' : function () {
        //ripulire il contenitore della tabella
        contattiWrapper.innerHTML = '';
        this.contatti.forEach((contatto, index) => {
            let tr = document.createElement('tr');
            tr.innerHTML = 
                   `<td>${contatto.nome}</td>
                    <td>${contatto.numero}</td>
                    <button class="btn bg-danger text-white border-0 btnRemoveContact" id="${index}">Rimuovi contatto </button>`
            contattiWrapper.appendChild(tr);
        })
            btnRemoveContact = document.querySelectorAll('.btnRemoveContact');
            console.log(btnRemoveContact);
            //evento: rimuovi contatto
            btnRemoveContact.forEach((btnRemove) => {
                    btnRemove.addEventListener('click', () =>{
                    rubrica.RemoveContact(btnRemove);
                    rubrica.showContatcs();
                })
            })
    },
    
    //metodo: aggiungi contatto
    'AddContact' : function (nome, numero) {
        this.contatti.push({'nome': nome, 'numero':numero})
    },

    //metodo: rimuovi contatto
    'RemoveContact' : function (button) {
        console.log(button.id);
        console.log(rubrica.contatti[button.id]);
        let indexContact = button.id;
        rubrica.contatti.splice(indexContact, 1);
        console.log(rubrica.contatti);
    }

}


let confirm = true;
//evento: mostra/nascondi contatti
btnShowContacts.addEventListener('click', () => {
    if(confirm == true){
        rubrica.showContatcs();
        confirm = false;
        btnShowContacts.innerHTML = 'Nascondi Contatti'
    } else {
        confirm = true;
        contattiWrapper.innerHTML = ''
        btnShowContacts.innerHTML = 'Mostra Contatti'
    }
})

//evento: aggiungi contatto
btnAddContact.addEventListener('click' , () => {
    if(inputName.value != '' && inputNumber.value != ''){
        rubrica.AddContact(inputName.value, inputNumber.value);
        inputName.value = '';
        inputNumber.value = '';
    } else if (inputName.value == '' && inputNumber.value != ''){
        alert('Inserisci Nome Contatto');
    } else if (inputName.value != '' && inputNumber.value == ''){
        alert('Inserisci Numero Contatto');
    } else {
        alert('Inserisci Nome e Numero Contatto');
    }
})



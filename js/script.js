// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
//  gli elementi della lista individualmente con un ciclo while.



//inizializzo il bottone
const inputSend = document.querySelector(".send");

//inizializzo 'input
const inputIngredienti = document.querySelector(".ingredienti");

//selezioniamo ul dell'html
const listaUl = document.querySelector(".listaspesa");

//creiamo una lista della spesa
const listaSpesa = ["carne","uova","pomodori","mandarini"];

//scorro la lista della spesa con un ciclo while
//al click del bottone
inputSend.addEventListener("click", function(){

    const ingrediente = inputIngredienti.value;
   
    // aggiunfiamo il nuovo ingrediente alla lista
    listaSpesa.push(ingrediente);

    // creiamo un nuovo elemento li per il nuovo ingrediente
    const elementLi = document.createElement("li");
    elementLi.innerHTML = ingrediente;

    // inseriamo il li creato dentro l'ul
    listaUl.append(elementLi);

})


let i = 0;
while(i < listaSpesa.length){

let itemSpesa = listaSpesa[i];

//creiamo li che andranno all'interno dell'ul
const elementLi = document.createElement("li");

//inseriamo dentro il li il contenuto
elementLi.append(itemSpesa);

//inseriamo il li creato dentro l'ul
listaUl.append(elementLi);

i++;
}
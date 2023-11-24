// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
//  gli elementi della lista individualmente con un ciclo while.


//selezioniamo ul dell'html
const listaUl = document.querySelector(".listaspesa");

//creiamo una lista della spesa
const listaSpesa = ["carne","uova","pomodori","mandarini"];

//scorro la lista della spesa con un ciclo while

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

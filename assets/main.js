
const numbersRowElement = document.getElementById('numbers_row');

const inputRowElement = document.getElementById('input_row');

const pcNumbers = createRandomNumbersArray(5, 100);

for (let i = 0; i < pcNumbers.length; i++) {

    let htmlContent = `
        <div class="col">
        <div class="card text-center p-4 display-4">${pcNumbers[i]}</div>
        </div>
    `;

    numbersRowElement.insertAdjacentHTML('beforeend', htmlContent);
}

setTimeout(hideNumberElements('#numbers_row .card'), 50000);



function hideNumberElements(querySelectorString) {

    const selectedElements = document.querySelectorAll(querySelectorString);

    console.log(selectedElements);

    for (let i = 0; i < selectedElements.length; i++) {
        selectedElements[i].innerHTML = `<i class="fa-solid fa-circle-question"></i>`;

        console.log(`fatto ${i}`);
    }

    inputRowElement.classList.remove('d-none');

}




//creatore di vettore di numeri casuali
function createRandomNumbersArray(arrayDimension, maxValue) {

    const outputArray = [];

    while (outputArray.length !== arrayDimension) {
        const randomNumber = Math.floor(Math.random() * maxValue) + 1;

        if (!outputArray.includes(randomNumber)) {
            outputArray.push(randomNumber);
        }
    }

    return outputArray;  
}


//funzione per stabilire il punteggio tra numeri comparsi e numeri inseriti
function compareArray(array1, array2) {

    let counter = 0;

    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if (array2.includes(array1[i])) {

                counter++;
            }
        }
    }

    return counter;
}
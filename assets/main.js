
const numbersRowElement = document.getElementById('numbers_row');

const inputRowElement = document.getElementById('input_row');

const pcNumbers = createRandomNumbersArray(5, 100);

for (let i = 0; i < pcNumbers.length; i++) {

    let htmlContent = `
        <div class="col">
        <div class="card text-center p-4 display-4 h-100 justify-content-center pc_number_${i+1}">${pcNumbers[i]}</div>
        </div>
    `;

    numbersRowElement.insertAdjacentHTML('beforeend', htmlContent);
}

//opzione 1
//setTimeout(function() {hideNumberElements('#numbers_row .card')}, 5000);


//opzione 2
setTimeout(hideNumberElements.bind(null, '#numbers_row .card'), 5000);

const buttonsElement = [];

let counter = 0;

for (let j = 0; j < pcNumbers.length; j++) {

    buttonsElement[j] = document.getElementById(`btn_${j+1}`);


    buttonsElement[j].addEventListener('click', function() {

        const inputNumber = document.getElementById(`input_${j+1}`).value;

        

        if (inputNumber == pcNumbers[j] && buttonsElement[j].condition !== true) {
            //console.log(true);

            document.getElementById(`input_div_${j+1}`).innerHTML = '<i class="fa-solid fa-circle-check text-success mt-4"></i>';

            //console.log(document.querySelector(`.pc_number_${j+1}`));
            //console.log(pcNumbers[j]);


            document.querySelector(`.pc_number_${j+1}`).innerHTML = pcNumbers[j];

            buttonsElement[j].condition = true;
            //console.log('ciao');

            counter++;

            //console.log(counter);

            if (counter === 5) {
                console.log('hai vinto');

                const htmlWinnerMessage = `
                <div class="position-absolute fw-bold lead text-success" style="top: 30%; left: 50%; transform: translate(-50%, -50%); font-size: 30vh; z-index: 100;">BRAV*</div>
                `;

                document.querySelector('body').insertAdjacentHTML('beforeend', htmlWinnerMessage);

                //alert('Complimenti! Hai vinto un bel niente!')
            }

        } else if (inputNumber != pcNumbers[j] && buttonsElement[j].condition !== true) {
            
            document.getElementById(`input_div_${j+1}`).innerHTML = '<i class="fa-solid fa-circle-xmark text-danger mt-4"></i>';

            //console.log(false);
            //console.log(pcNumbers[j]);
        }

        
        //console.log(inputNumber);
    })

    //window['elementButton' + j] = document.getElementById(`btn_${j}`);

    //console.log(eval(elementButton + j));
}

//console.log(buttonsElement[0]);
//console.log(buttonsElement[4]);


function hideNumberElements(querySelectorString) {

    const selectedElements = document.querySelectorAll(querySelectorString);

    console.log(selectedElements);

    for (let i = 0; i < selectedElements.length; i++) {
        selectedElements[i].innerHTML = `<i class="fa-solid fa-circle-question"></i>`;

        console.log(`fatto ${i}`);
    }

    

    //also display this
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
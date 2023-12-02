const cardHolder = document.querySelector('.cardholder');
const cardNumber = document.querySelector('.cardnumber');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const cvc = document.querySelector('.cvc');
const nameContainer = document.querySelector('.nameContainer');
const cardContainer = document.querySelector('.cardContainer');
const monthYear = document.querySelector('.monthYear');
const cvcContainer = document.querySelector('.cvvContainer');
let errorInfo = document.createElement('p');
const confirmBtn = document.querySelector('.confirm-btn');

//setting booleans for confirmations
let cardHolderConfirmation = false;
let cardNumberConfirmation = false;
let monthNumberConfirmation = false;
let yearNumberConfirmation = false;
let cvvNumberConfirmation = false;

cardHolder.addEventListener('input', () => {
    let result = /^[a-zA-Z ]+$/;
    var inputValue = cardHolder.value.trim();
    if (result.test(inputValue) && inputValue.length <= 20 && inputValue.length >= 5) {
        cardHolder.style.border = '2px solid hsl(278, 94%, 30%)';
        document.querySelector('.personName').textContent = inputValue.toUpperCase();
        cardHolderConfirmation = true;
        if (nameContainer.contains(errorInfo)) {
            nameContainer.removeChild(errorInfo);
        }
    } else {
        cardHolder.style.border = '2px solid hsl(0, 100%, 66%)';
        document.querySelector('.personName').textContent = 'JANE APPLESEED';
        errorInfo.classList.add('error');
        errorInfo.style.color = 'hsl(0, 100%, 66%)';
        errorInfo.style.fontSize = '12px';
        errorInfo.textContent = 'Wrong Format, max: 20, min: 5';
        nameContainer.append(errorInfo);
        cardHolderConfirmation = false;
    }
});

    

cardNumber.addEventListener('input', () => {
    let visa =  /^4[0-9]{12}(?:[0-9]{3})?$/;
    let mastercard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    let americanExpress = /^3[47][0-9]{13}$/;
    let dinersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    let discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    let jcb = /^(?:2131|1800|35\d{3})\d{11}$/;
    var inputValue = cardNumber.value.trim();

    if (visa.test(inputValue) || mastercard.test(inputValue) || americanExpress.test(inputValue) || dinersClub.test(inputValue) || discover.test(inputValue) || jcb.test(inputValue)) {
        cardNumber.style.border = '2px solid hsl(278, 94%, 30%)';
        // Format the card number with spaces after every 4 digits
        var formattedCardNumber = inputValue.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        document.querySelector('.cardNumber').textContent = formattedCardNumber;
        cardNumberConfirmation = true;
        if (cardContainer.contains(errorInfo)) {
            cardContainer.removeChild(errorInfo);
        }
    } else {
        cardNumber.style.border = '2px solid hsl(0, 100%, 66%)';
        document.querySelector('.cardNumber').textContent = '0000 0000 0000 0000';
        errorInfo.classList.add('error');
        errorInfo.style.color = 'hsl(0, 100%, 66%)';
        errorInfo.style.fontSize = '12px';
        errorInfo.textContent = 'Wrong Format';
        cardContainer.append(errorInfo);
        cardNumberConfirmation = false;
    }
});

month.addEventListener('input', ()=> {
    var inputValue = month.value.trim();
    if (!isNaN(inputValue) && inputValue <= 12 && inputValue != 0) {
        month.style.border = '2px solid hsl(278, 94%, 30%)';
        document.querySelector('.cardMonth').textContent = inputValue;
        monthNumberConfirmation = true;
        if (monthYear.contains(errorInfo)) {
            monthYear.removeChild(errorInfo);
        }
    } else {
        month.style.border = '2px solid hsl(0, 100%, 66%)';
        document.querySelector('.cardMonth').textContent = '02';
        errorInfo.classList.add('error');
        errorInfo.style.color = 'hsl(0, 100%, 66%)';
        errorInfo.style.fontSize = '12px';
        errorInfo.textContent = 'Wrong Format';
        monthYear.append(errorInfo);
        monthNumberConfirmation = false;
        
    }
});

year.addEventListener('input', ()=> {
    var inputValue = year.value.trim();
    if (!isNaN(inputValue) && inputValue <= 99 && inputValue != 0) {
        year.style.border = '2px solid hsl(278, 94%, 30%)';
        document.querySelector('.cardYear').textContent = inputValue;
        yearNumberConfirmation = true;
        if (monthYear.contains(errorInfo)) {
            monthYear.removeChild(errorInfo);
        }
    } else {
        year.style.border = '2px solid hsl(0, 100%, 66%)';
        document.querySelector('.cardYear').textContent = '99';
        errorInfo.classList.add('error');
        errorInfo.style.color = 'hsl(0, 100%, 66%)';
        errorInfo.style.fontSize = '12px';
        errorInfo.textContent = 'Wrong Format';
        monthYear.append(errorInfo);
        yearNumberConfirmation = false;
    }
});

cvc.addEventListener('input', ()=> {
    var inputValue = cvc.value.trim();
    if (!isNaN(inputValue) && inputValue >= 100 && inputValue <= 999) {
        cvc.style.border = '2px solid hsl(278, 94%, 30%)';
        document.querySelector('.cvv').textContent = inputValue;
        cvvNumberConfirmation = true;
        if (cvcContainer.contains(errorInfo)) {
            cvcContainer.removeChild(errorInfo);
        }
    } else {
        cvc.style.border = '2px solid hsl(0, 100%, 66%)';
        document.querySelector('.cvv').textContent = '000';
        errorInfo.classList.add('error');
        errorInfo.style.color = 'hsl(0, 100%, 66%)';
        errorInfo.style.fontSize = '12px';
        errorInfo.textContent = 'Wrong Format';
        cvcContainer.append(errorInfo);
        cvvNumberConfirmation = false;
    }
});


//function for the confirmation page
function confirmationPage() {
    let form = document.querySelector('.form');
    let completion = document.querySelector('.completion');
    form.style.display = 'none';
    completion.style.display = 'flex';
}

//confirm button configuration and popup
confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (cardNumberConfirmation && cardHolderConfirmation && monthNumberConfirmation && yearNumberConfirmation && cvvNumberConfirmation) {
        confirmationPage();
    }
})
const btn = document.querySelector('.stacked-bills');

function calculate(event) {
    event.preventDefault();

    let heightFeet = parseFloat(document.querySelector('.height-feet').value);
    let heightInch = parseFloat(document.querySelector('.height-inches').value);
    let billChoice = document.querySelector('.money').value;
    const billThickness = .0043;
    let heightConvert = (heightFeet * 12 + heightInch);
    const numOfBills = Math.ceil(heightConvert / billThickness);
    const heightWorth = Math.ceil(numOfBills * billChoice);

    const answer = document.querySelector('.answer-field');
    // answer.classList.add('answer');
    answer.innerHTML = (`It would take ${numOfBills} $${billChoice} bills to be as tall as you! And that's a total of $ ${heightWorth}! Wish that was in my bank account!`);
    console.log(answer.innerHTML);
    
    setTimeout(() => {
        answer.innerHTML = "";
    }, 8000);
};

btn.addEventListener('click', calculate);
addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById('formularioCalculadora');

    form.onsubmit = (event) =>{
        event.preventDefault();
        const results = {};
        let data = new FormData(form);
        for (let item of data){
            results[item[0]] = item[1];
        }
        updateCalculator(results);
        form.reset();
    };

});

updateCalculator = function(item) {
    const strong = document.querySelectorAll('h1 > strong');
    const date = new Date;

    const dataDigitada = `${item.year}-${item.month}-${item.day}`;
    const actualDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;

    const difInMs = new Date(actualDate) - new Date(dataDigitada);

    const difInDays = difInMs / (1000 * 60 * 60 * 24);
    const difInMonths = difInDays / 30;

    const difInYears = difInMonths / 12;

    strong[0].innerHTML = difInYears.toFixed(0);
    strong[1].innerHTML = difInMonths.toFixed(0);
    strong[2].innerHTML = difInDays.toFixed(0);
}
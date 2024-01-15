
const form = document.querySelector('form');



form.addEventListener('submit', (e) => {

    e.preventDefault();

    const result = document.querySelector('.result');
    const height = parseInt(document.querySelector('#heightInCM').value);
    const weight = parseInt(document.querySelector('#weightInKG').value);

    if(height === '' || height < 0 || isNaN(height))
    {
        result.innerHTML = `<span> Please Enter a Valid height ${height}</span>`
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        result.innerHTML = `<span> Please Enter a Valid weight ${weight}</span>`
    }
    else
    {
        // BMI Formula 
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);

        result.innerHTML = `<span> ${BMI} </span>`
    }
});
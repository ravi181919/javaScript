
/////////////// array pass in function or handling ////////////////

const array = [200, 500, 600, 700]

function returnSecondValue(getar)
{
    return getar[1]
}
returnSecondValue(array) // it is reference 
console.log(returnSecondValue(array)); 
// or 
console.log(returnSecondValue([800, 900]));

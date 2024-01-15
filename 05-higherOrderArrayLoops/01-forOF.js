/**
 * ***************************************************************************************************************
 * ****************************** for_Of_Loop ********************************************************************
 * ***************************************************************************************************************
 */


/////////////////////////////// forOf On Array //////////////////////////////////////////////
const array = [1,2,3,4,5,6]
for (const number of array) {
    console.log(number);
};

/////////////////////////////// forOf On string //////////////////////////////////////////////

const onString = 'hello world'
for (const string of onString) {
    if (string == ' ') {
        continue // it remove the space 
    }
    console.log(string);
}
/////////////////////////////// forOf On map ////////////////////////////////////////////////
const map = new Map();
map.set('i', 'india')
map.set('R', 'Ravi')
map.set('s', 'Sona')

// map.set('R', 'Ravi')  // map is not accpect the dubble same value 

console.log(map);

// forOf On Map
for (const [keyOfmap, valOfmap] of map) { /* [keyOfmap, valOfmap] => it is destructuring of array */

    console.log(keyOfmap, '=>' , valOfmap);

}


///////////////////////////////// cntrol overFlow  /////////////////////////////////////////////////////////
/**   Comparision Operators 
 *  ==  equal
 *  === strict equal : data types and value 
 *  <  less than 
 *  >  grether than 
 *  <= less than or equal 
 *  >=  grether than or equal 
 *  +=  add and assign value 
 *  != not equal 
 *  !== strict not equal 
 */
/////////////////////////////////////////////////////////////////////////
/**
 *  if statment : execute code,  when condition is true 
 *  syntax => 
 *  if(true){ execute all code, those inside spoce}
 */

if (2 == 2){
    console.log(`hello how are you today`);
};

let isLoggedIn = true
if(isLoggedIn){
    console.log(`userIsLoggedIn`);
};

let temp = 40 
if (temp < 50 )
{
    console.log(`less than 50 `);
};

/* else statment : when if statment is fasle or not execute then else statment is executed 
   syntax = > 
   if(false){
        
   }else{
    console.log(`else statment is executed`)
   }
*/

let windSpeed = 55
if(windSpeed == 50)
{
    console.log(`wind speed: is equal 50`);
}
else
{
    console.log(`wind speed: is not equal to 50`);
};


//  const and var scope check 
const score = 300
if (score > 400)
{
    const power = "fly"
    // var power = "fly"  // var scop is completly globle 
    console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`); // for check diff. b/w const and var 


const balance = 1000
// if (balance > 500) console.log('test'), console.log('test 2'); // not perefer to write code this types , it not good 

////////// nesting //////////////////

if (balance < 500)
{
    console.log('less than 500');
}
else if (balance < 750)
{
    console.log(`less than 750`);
}
else if (balance < 900)
{
    console.log(`less than 900`);
}
else
{
    console.log(`grether than 1000`);
};


/// AND (&&) ////////////////////////
const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard )
{
    console.log(`Allow to buy courses`);
}


//////////// OR (||) ///////////////////

const loggeInByGoogle = false
const loggeInByEmail = true
if (loggeInByEmail || loggeInByGoogle)
{
    console.log(`user is logged in`);
}
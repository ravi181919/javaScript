const accountId = 12345
let name = 'Ravi'
var accountCity = 'Gopalganj'
accountState = 'Bihar' // very bad way to declaration of variables 

let accountEmail = 'rg@gamil.com'

/*                            +++ const +++
accountId = 12  // not allowed (to change const variable values) 
console.log(accountId);
*/

/**                           +++ var +++
 *  Prefer to not use var,
 *  because of issue in block scope and function scope
 */
console.table([name, accountId, accountCity, accountState, accountEmail]);

// changing in  variable values
name = 'Sona'
accountCity = 'Mirganj'
accountState = 'Uttar pradesh'

console.table([name, accountId, accountCity, accountState, accountEmail])


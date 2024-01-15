/*****************************************************************************************************************
 * ******************************************** Filter ***********************************************************
 * ************************************************************************************************************* */

// Example  => 
const  numbers = [1,2,3,4,5,6,7,8,9,10]

const myNumber = numbers.filter((num) => num < 5)

// console.log(myNumber);


/****************************************************************************************
 * ************************************  example no 1 ***********************************
 * ***************************************************************************************
 */
const books = [
    {title: "book one" , genre: 'history', publish: 1990, edition: 1999 },
    {title: "book two" , genre: 'game', publish: 1999, edition: 2004 },
    {title: "book three" , genre: 'story', publish: 1950, edition: 2003 },
    {title: "book four" , genre: 'fiction', publish: 1970, edition: 2000 },
    {title: "book five" , genre: 'Non - finction', publish: 1990, edition: 2005 },
    {title: "book six" , genre: 'science', publish: 1980, edition: 2007 },
    {title: "book seven" , genre: 'poem', publish: 1940, edition: 2008 },
    {title: "book eight" , genre: 'history', publish: 1920, edition: 2010 },
    {title: "book nine" , genre: 'science', publish: 1959, edition:2009 },
    {title: "book ten" , genre: 'game', publish: 1947, edition: 2005 },
    {title: "book eleven" , genre: 'fiction', publish: 1962, edition: 2011 },
    {title: "book twelve" , genre: 'Non - fiction', publish: 1995, edition: 2015 },
    {title: "book thirteen" , genre: 'story', publish: 1996, edition: 2008 },
    {title: "book fourteen" , genre: 'poem', publish: 1949, edition: 2002 },
    {title: "book fifteen" , genre: 'history', publish: 1930, edition: 2000 },
]

/****************************************************************************** *
********************************* by genre => *********************************
*********************************************************************************/

const byGenreOfBooks = books.filter((fetch) => fetch.genre === 'history')

// const byGenreOfBooks = books.filter((fetch) => {
// return fetch.genre === 'history'})  // method no. second in which return key word is important

console.log(byGenreOfBooks);


/******************************************************************************
***************************** by publish date => *****************************
*******************************************************************************/ 

// (1) blow of 1990  => 
const blowPublishDateOfBooks = books.filter((fetch) => fetch.publish <= 1990)

console.log(blowPublishDateOfBooks);


// (2) above to 1990
const aboveOfPublishDateOfBooks = books.filter((fetch) => fetch.publish >= 1990)

console.log(aboveOfPublishDateOfBooks);


/*********************************************************************************************
 * **************************** (||)  and  (&&) ***********************************************
 * *******************************************************************************************
 * 
 */

// And (&&)
const andBooks = books.filter((and) => {
    return and.publish >= 1920 && and.genre === 'history' 
})
console.log(andBooks);


// Or (||)
const orBooks = books.filter((or) => 
{
    return or.publish >= 1980 || or.genre === 'game'
})
console.log(orBooks);
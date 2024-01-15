
// its not a optimize code, becuase its traversing all the Dom tree
function addLanguageName(langName) {
   const li = document.createElement('li')
   li.innerHTML = `${langName}`
   document.querySelector('.helloLanguage').appendChild(li)
}
addLanguageName('java')
addLanguageName('python')

// its optimize code , becuase its not traversing all the DOm tree

function addOptiLang(optLag){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(optLag));
    document.querySelector('.helloLanguage').appendChild(li)
}

addOptiLang('c++')
addOptiLang('ruby')


/*************************** Edit *********************** */

const secondLang = document.querySelector('li:nth-child(2)');
// secondLang.innerHTML = 'MySQL' // fisrt method

const newLang = document.createElement('li');
newLang.textContent = 'MySQL'
secondLang.replaceWith(newLang) // second method 


const firstLang = document.querySelector('li:nth-child(1)');
firstLang.outerHTML = '<li>TypeScript</li>' // third metod


/**************** Remove **************************************** */
const lastLangRemove = document.querySelector('li:last-child');
lastLangRemove.remove()
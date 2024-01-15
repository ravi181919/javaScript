const createDivElement = document.createElement('div');
createDivElement.className = 'main'
createDivElement.id = Math.round(Math.random() * 10 + 1);
createDivElement.style.padding = '13px'
createDivElement.style.color = 'white'
createDivElement.style.width = 'fit-content'
createDivElement.style.backgroundColor = 'black'
createDivElement.setAttribute('title', 'newDiv');

// fisrt method to add text  , its change the real text of the element => its take refernce of element text
// createDivElement.innerHTML = 'hello World' 

// second method to add some text  => this mrthod is not change the real text of the element 
const addText = document.createTextNode('Namstey JavaScript')
createDivElement.appendChild(addText);


// created Element  add into html Body
document.body.appendChild(createDivElement);
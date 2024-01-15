
// select body
const selectBody = document.querySelector('body');
const selectButtons = document.querySelectorAll('.button');
const selectHeading = document.querySelector('h1');

selectButtons.forEach((but) => {
    but.addEventListener('click', (e) => {

/****************************************************************  By switch case method => ************************************************/
    // switch (e.target.id) {
    //     case 'Yellow':
    //         selectBody.style.backgroundColor = '#ffff00'; // first Method to give backgroundColor for Body 
    //         selectHeading.style.color = '#ff0000'
    //         break;
    //     case 'Blue':
    //         selectBody.style.backgroundColor = '#0000ff';
    //         selectHeading.style.color = '#ffff00'
    //         break;
    //     case 'Red':
    //         selectBody.style.backgroundColor = '#ff0000';
    //         selectHeading.style.color = '#fff'
    //         break;
    //     case 'Grey':
    //         selectBody.style.backgroundColor = '#808080';
    //         selectHeading.style.color = '#fff'
    //         break;
    
    //     default :
    //     console.log('Sorry somthing Error!');
    //         break;
    // }

/************************************************************  By if-else method => **************************************************** */ 
    if (e.target.id === 'Yellow') {
        selectBody.style.backgroundColor = e.target.id; // second method to set backgroundColor for Body 
        selectHeading.style.color = '#ff0000'
    }
    if (e.target.id === 'Blue') {
        selectBody.style.backgroundColor = e.target.id;
        selectHeading.style.color = '#ffff00'
    }
    if (e.target.id === 'Red') {
        selectBody.style.backgroundColor = e.target.id;
        selectHeading.style.color = '#fff'
    }
    if (e.target.id === 'Grey') {
        selectBody.style.backgroundColor = e.target.id;
        selectHeading.style.color = '#fff'
    }
})});
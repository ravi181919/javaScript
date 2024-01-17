 // attachEnevt()
        // jQuery = onEvent

        // method no 2
      /* 
       document.getElementById('road').onclick = function(){
            alert('helo');
        }  // not give more features
         */
        

        // method no 3 
       /*
        document.querySelector('#road').addEventListener('click', (e) => {
            console.log(e);
        }, false);   // refer to use it 
         */


/*
**************************** EventPropagation =>  Bubbling(False) and capturing(true) ****************************
syntax=> .addEventListener('eventName', callBackfunction, flase Or true)
**/

// Bubbling(false) => 
/* 
document.getElementById('image').addEventListener('click', function(e){
    console.log('clicked on ul ');
},false)  // false is called bubbling in EveentListener 

document.getElementById('road').addEventListener('click',(e) => {
    console.log('clicked on road');
    e.stopPropagation() // it is used to stop bubbling
},false) 
*/

// Capturing (true) =>
/* 
document.getElementById('image').addEventListener('click',function(e){
    console.log('clicked on ul ');
},true)  // false is called bubbling in EveentListener 

document.getElementById('moon').addEventListener('click',(e) => {
    console.log('clicked on moon');
    e.stopPropagation() // it is used to stop bubbling
},true) 
*/

/*
********************* preventeDefault => use to stop default behevior of any html element ************************
*/
 /* 
 document.getElementById('goog').addEventListener('click', (e) => {
    e.preventDefault(); // stop default behevior of element 
    e.stopPropagation(); // use to stop bubbling 
    console.log('clicked on google');
},false)
*/

/**
 * Project => How to remove the photo which was clicked?
 */

const ul = document.querySelector('#image')
ul.addEventListener('click', (e) => 
{
    if( e.target.tagName === 'IMG')
    {
        let removeClickedImage = e.target.parentNode
        // removeClickedImage.remove();
        removeClickedImage.parentNode.removeChild(removeClickedImage); // Method No. => 2 
    }
    if(e.target.tagName === 'A')  // to stop default behavior of the element 
    {
      e.preventDefault();
    }
},false)
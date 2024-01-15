const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children); // found =>  HTML collection 
// console.log(parent.children[0]); // found 0 index element  
// console.log(parent.children[0].textContent); // found textContent of 0 index

// parent.children[0].style.color = 'red'  // chnage => color 
// console.log(parent.children[0].innerHTML);


for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].textContent);
    // parent.children[i].style.color = 'red'
}


// console.log(parent.firstElementChild); // div.day
// console.log(parent.lastElementChild);  // div.day

// console.log(parent.firstElementChild.innerHTML); // monday
// console.log(parent.lastElementChild.innerHTML);  // thursday

// parent.firstElementChild.style.color = 'red'
// parent.lastElementChild.style.color = 'green'

const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

console.log('nodes:', parent.childNodes);
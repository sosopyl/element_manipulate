"use strict";
// Манипулирование элементами
//318

//1
// let parent = document.querySelector('#elem');
// let p = document.createElement('li');
// li.textContent = 'item';
// parent.appendChild(li);

//2
// let parent = document.querySelector('#elem')
// let btn = document.querySelector('#button')
// btn.addEventListener('click', function(){
//     let child = document.createElement('li')
//     child.textContent = 'item'
//     parent.appendChild(child)
// })


//319
// let parent = document.querySelector('#parent')
// let button = document.querySelector('input')

// button.addEventListener('click', function(){
//     let child = document.createElement('li')
//     child.textContent = 'text'
//     child.addEventListener('click', function(){
//         child.textContent += '!'
//     })
//     parent.appendChild(child)
// })

//320
// let parent = document.querySelector('#parent');
// for(let i = 1; i <= 10; i++){
//     let elem = document.createElement('li')
//     elem.textContent = i
//     parent.appendChild(elem)
// }

//321
// let parent = document.querySelector('#parent')
// let p = document.querySelector('p')
// for(let i = 1; i <= 5; i++){
//     let child = document.createElement('input')
//     child.addEventListener('blur', function(){
// p.textContent += child.value
//     })
//     parent.appendChild(child)
// }

//322
//1
// let elems = document.querySelectorAll('li')
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }

//2
// let btn = document.querySelector('input')
// let parent = document.querySelector('#parent')
// btn.addEventListener('click', function(){
//     parent.lastChild.remove()
// })

//323
//1
// let parent = document.querySelector('#elem')
// let elem1 = document.createElement('li')
// elem1.textContent = 'start'
// let elem2 = document.createElement('li')
// elem2.textContent = 'finish'
// parent.append(elem2)
// parent.prepend(elem1)

//2
// let parent = document.querySelector('#parent')
// let before = document.querySelector('#elem')
// let newelem = document.createElement('li')
// newelem.textContent = 'new'
// parent.insertBefore(newelem, before)

//3
// let parent = document.querySelector('#parent')
// let before = document.querySelector('#elem')
// let newelem = document.createElement('li')
// newelem.textContent = 'new'
// newelem.addEventListener('click', function(){
//     newelem.textContent +="!"
// })
// parent.insertBefore(newelem, before)

//324
//1
// let parent = document.querySelector('#elem')
// let nelem = document.createElement('p')
// nelem.textContent = '!!!'
// parent.insertAdjacentElement('beforeBegin', nelem)

//2
// let parent = document.querySelector('#elem')
// let nelem = document.createElement('p')
// nelem.textContent = '!!!'
// parent.insertAdjacentElement('afterEnd', nelem)

//3
// let parent = document.querySelector('#elem')
// let nelem = document.createElement('p')
// nelem.textContent = '!!!'
// parent.insertAdjacentElement('afterBegin', nelem)

//4
// let parent = document.querySelector('#elem')
// let nelem = document.createElement('p')
// nelem.textContent = '!!!'
// parent.insertAdjacentElement('beforeEnd', nelem)

//5
// let parent = document.querySelector('#elem')
// parent.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div> ');

//325

// let btn = document.querySelector('#btn');
// let elem = document.querySelector('#elem');
// btn.addEventListener('click', function(){
//     let clone = elem.cloneNode(true)
//     elem.insertAdjacentElement('afterEnd', clone)
// })

//326
//1
// let elem = document.querySelector('#elem');
// console.log(elem.matches('.www'))
//2
// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'))
//3
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// console.log(elem1.contains(elem2))


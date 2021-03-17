//console.dir(document);
//console.log(document.domain);
//console.log(document.url);
//console.log(document.title);
//document.title = 123;
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
 //document.all[10].textContent = "hello javascript"
 //console.log(document.forms);
 //console.log(document.getElementById("header-title"));
//var headerTitle = document.getElementById("header-title");
//console.log(headerTitle);
//headerTitle.textContent = 'i love love'
//headerTitle.innerText = 'i love menubar'; 
//headerTitle.innerHTML = '<h1>burnaboy</h1>';
//headerTitle.style.borderBottom = "solid 3px #000";


//GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[1].textContent = 'item 2';
// items[3].style.fontWeight = 'bold';
// items[2].style.backgroundColor =  'coral';

// //for loop to style 

// for(let index = 0; index <items.length; index++) {
//     items[index].style.backgroundColor = 'coral';
// }

//get elements by tagname

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// li[1].textContent = 'item 2';
// li[3].style.fontWeight = 'bold';
// li[2].style.backgroundColor =  'coral';

// //for loop to style 

// for(let index = 0; index <li.length; index++) {
//     li[index].style.backgroundColor = 'coral';
// }


//QUERY SELECTOR //
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px blue';

// const input = document.querySelector('input');
// input.valuec = 'hello nigeria';

//traversing the dom



 const itemList = document.querySelector('#items');
// //parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'blue';
// console.log(itemList.parentNode.parentNode
//     );

//childnode
//console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].backgroundColor = 'yellow'; 

//create element
var newDiv = document.createElement('div');
newDiv.id = 'hello1';
//add attributes
newDiv.setAttribute('title','Hello div');

console.log(newDiv);








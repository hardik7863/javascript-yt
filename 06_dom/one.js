//all below code need to write on console of browser

/* 
document.getElementById('title')
<h1 id=​"title" class=​"heading">​…​</h1>​

document.getElementById('title').id
'title'

document.getElementById('title').class
undefined

document.getElementById('title').className
'heading'

document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }

document.getElementById('title').getAttribute()
VM609:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
    at <anonymous>:1:34
(anonymous) @ VM609:1

document.getElementById('title').getAttribute('id')
'title'

document.getElementById('title').getAttribute('class')
'heading'

// this will overwrite the class attribute
document.getElementById('title').setAttribute('class','test') 
undefined


document.getElementById('title').setAttribute('class','test heading')
undefined

document.getElementById('title')
<h1 id=​"title" class=​"test heading">​…​</h1>​

const title= document.getElementById('title')
undefined


title
<h1 id=​"title" class=​"test heading">​…​</h1>​

title.style.borderRadius="15px"
'15px'

title.style.borderRadius="50px"
'50px'

title.textContent
'DOM learning on Chai aur code test text'

title.innerHTML
'DOM learning on Chai aur code <span style="display: none;">test text</span>'

title.innerText
'DOM learning on Chai aur code'

textContent vs innerText vs innerHTML
textContent shows all the content including the one which is hidden because of css properties
whereas innerText shows only the available text  
innerHtml shows all text including hidden one but also the inner html 

document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]

document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]


document.querySelector('h2')
<h2>​Lorem ipsum dolor sit.​</h2>​

document.querySelector('#title')
<h1 id=​"title" class=​"heading" style=​"border-radius:​ 50px;​ background-color:​ green;​">​…​</h1>​

document.querySelector('.heading')
<h1 id=​"title" class=​"heading" style=​"border-radius:​ 50px;​ background-color:​ green;​">​…​</h1>​


document.querySelector('input[type="password"]')
<input type=​"password" name id>​

document.querySelector('p:first-child')
null //because there is no parent child relationship

document.querySelector('ul')
<ul>​…​</ul>​

const myul = document.querySelector('ul')
undefined

myul.querySelector('li')
<li class=​"list-item">​…​</li>​

const turnGreen =myul.querySelector('li')
undefined

turnGreen.style.backgroundColor="green"
'green'

turnGreen.style.pading="10px"
'10px'

turnGreen.innerText
'one'

turnGreen.innerText="five"
'five'

//querySelector is used for getting the first element 
eg;- document.querySelector('h1')
//then this will return the first h1 tag

whereas querySelectorAll is used to get all element of required type
eg:-document.querySelectorAll('l1')
// this will  give you all li tags in the document

document.querySelectorAll('li')
NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]


NodeList has prototype in which it has forEach loop 
NodeList look like array but
NodeList and HTMLCollection are not pure array
because maps are not available in prototype

const tempLIList = document.querySelectorAll('li')
undefined

tempLIList
NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]

const myarr =[1,2,3,4,5]
undefined
// on looking to the prortotype of the myarr you will find map,push and forEach 
//hence it is array and nodelist not

tempLIList.style.color ='green'
VM5361:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:24
(anonymous) @ VM5361:1
//above way is not the right way of writing 

//the right way of writing in case of NodeList is: 
tempLIList[0].style.color ='green'
'green'

//one more example
const myh1=document.querySelectorAll('h1')
undefined

myh1
NodeList(2) [h1#title.heading, h1]

myh1.style.color ='green'
VM5624:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:18
(anonymous) @ VM5624:1

myh1[0].style.color ='green'
'green'

tempLIList
NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]

tempLIList.forEach
ƒ forEach() { [native code] }


tempLIList.forEach(function (l) {
    l.style.backgroundColor ='green'
}) //this will make one two three in green bg color
undefined

document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

const tempClassList =document.getElementsByClassName('list-item)
VM6129:1 Uncaught SyntaxError: Invalid or unexpected token

const tempClassList =document.getElementsByClassName('list-item')
undefined

tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

tempClassList.forEach((function (li) {
    console.log(li)
})
VM6253:3 Uncaught SyntaxError: missing ) after argument list

//note HTMLCollection does not have forEach in its prototype we need to take different approach

// Array.from is use to convert anything into array

Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]

const myConvertedArray = Array.from(tempClassList)
undefined

myConvertedArray.forEach(function(li){
    li.style.color ='orange'
})
undefined

javascript wikipedia website

document.querySelectorAll('h2')
//NodeList(13)

const allh2 =document.querySelectorAll('h2')
undefined

allh2[0].innerText
'Contents'

allh2[2].innerText
'Trademark'

const myh2=document.querySelectorAll('.mw-headline')
undefined

myh2[0].innerText
'History'

myh2.forEach(function(h){
    h.style.color ='black';
    h.style.style.backgroundColor='green';
    h.style.padding ='10px'
    h.innerText='hitesh'
})

*/
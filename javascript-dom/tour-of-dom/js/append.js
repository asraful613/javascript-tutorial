// where to add
const placeList=document.getElementById('place-list');
// what to be added
const li=document.createElement('li');
li.innerText='pahartoli';
// add the child
placeList.appendChild(li);

// where to add
const mainContainer = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'my food list';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);
section.appendChild(ul);
mainContainer.appendChild(section);


// set innnerHtml directly
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>My Dress section </h1>
<ul>
 <li>T-shirt </li>
 <li>Lungi</li>
 <li>Sando ganji</li>
 </ul>
`
mainContainer.appendChild(sectionDress);
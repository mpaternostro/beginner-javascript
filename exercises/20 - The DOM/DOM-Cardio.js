// Make a div

const $div = document.createElement('div');

// add a class of wrapper to it

$div.classList.add('wrapper');

// put it into the body

// const $body = document.querySelector('body');
// ES INNECESARIO HACER UNA VARIABLE BODY
document.body.appendChild($div);

// make an unordered list

const $ul = document.createElement('ul');

// add three list items with the words "one, two three" in them

const $liOne = document.createElement('li');
$liOne.textContent = 'one';
const $liTwo = document.createElement('li');
$liTwo.textContent = 'two';
const $liThree = document.createElement('li');
$liThree.textContent = 'three';

// put that list into the above wrapper

$div.appendChild($ul);
$ul.append($liOne, $liTwo, $liThree);

// create an image

const $img = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

$img.src = 'https://picsum.photos/250/300';
$img.classList.add('cute');
$img.alt = 'Cute Puppy';
$div.appendChild($img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const $HTMLString = `<div>
                        <p>Paragraph 1</p>
                        <p>Paragraph 2</p>
                    </div>`;
$ul.insertAdjacentHTML('beforebegin', $HTMLString);

// add a class to the second paragraph called warning
// remove the first paragraph

const p1 = document.querySelector('p');
const p2 = document.querySelector('p').nextElementSibling;
p1.parentNode.removeChild(p1);

p2.classList.add('warning');

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  return `<div class="playerCard">
  <h2>${name} — ${age} years</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    </div>`;
}

// make a new div with a class of cards

const $cardCollector = document.createElement('div');
$cardCollector.classList.add('cards');

// Have that function make 4 cards

const card1 = generatePlayerCard('Charlito', 3, 30);
const card2 = generatePlayerCard('Ringolin', 3, 25);
const card3 = generatePlayerCard('Lila', 17, 28);
const card4 = generatePlayerCard('Kevin', 15, 15);

// append those cards to the div

$cardCollector.insertAdjacentHTML('beforeend', card1);
$cardCollector.insertAdjacentHTML('beforeend', card2);
$cardCollector.insertAdjacentHTML('beforeend', card3);
$cardCollector.insertAdjacentHTML('beforeend', card4);

// put the div into the DOM just before the wrapper element

$div.insertAdjacentElement('beforebegin', $cardCollector);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

function deletePuppy(card) {
  card.parentNode.removeChild(card);
}

const cards = Array.from(document.querySelector('.cards').children);
cards.forEach(event => {
  const $delete = document.createElement('button');
  $delete.textContent = 'DELETE';
  event.appendChild($delete);
  $delete.addEventListener('click', () => deletePuppy(event));
});

// select all the buttons!

// const $buttons = document.querySelectorAll('button');

// make out delete function

// loop over them and attach a listener

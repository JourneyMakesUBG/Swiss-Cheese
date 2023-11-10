// Get the elements by their tag names
const body = document.body;
const header = document.querySelector('header');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const h3 = document.querySelector('h3');

// Set styles using JavaScript
body.style.fontFamily = 'Arial, sans-serif';

h2.style.lineHeight = '0.1';
h2.style.margin = '5px';

body.style.backgroundColor = 'black';
body.style.margin = '0';
body.style.padding = '0';
body.style.color = 'white';

header.style.backgroundColor = 'darkgrey';
header.style.padding = '1px';
header.style.textAlign = 'center';

h2.style.padding = '0';
p.style.padding = '0';

// Create additional elements
const secondSection = document.createElement('section');
const interstellarH3 = document.createElement('h3');
const interstellarParagraph1 = document.createElement('p');
const interstellarParagraph2 = document.createElement('p');

// Set content for the additional elements
interstellarH3.textContent = 'Interstellar Proxy:';
interstellarParagraph1.textContent = 'https://square-pear-apple-dog.2.ie-1.fl0.io/';
interstellarParagraph2.textContent = 'interstellar-two-theta.vercel.app';

// Append the additional elements to the second section
secondSection.appendChild(interstellarH3);
secondSection.appendChild(interstellarParagraph1);
secondSection.appendChild(interstellarParagraph2);

// Append the second section to the body
body.appendChild(secondSection);

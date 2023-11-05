// Copy the following data structure to the top of script.js:
var menuLinks = [{ text: 'about', href: '/about' },
{
    text: 'catalog', href: '#', subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
    ]
},
{
    text: 'orders', href: '#', subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
    ]
},
{
    text: 'account', href: '#', subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
    ]
}];



// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main')

// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg'

// Set the content of mainElto <h1>SEI Rocks!</h1>.
const head1 = document.createElement('h1')
head1.textContent = 'SEI Rocks!'
mainEl.appendChild(head1)


// Add a class of flex-ctrto mainEl.
mainEl.setAttribute('class', 'flex-ctr')

// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu')

// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = '100%'

// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Add a class of flex-aroundto topMenuEl.
topMenuEl.className = 'flex-around'

// Iterate over the entire menuLinksarray and for each "link" object:

for (let i = 0; i < menuLinks.length; i++) {
    // Create an <a>element.
    const element_a = document.createElement('a')

    // On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
    element_a.setAttribute('href', menuLinks[i].href)

    // Set the new element's content to the value of the textproperty of the "link" object.
    element_a.textContent = menuLinks[i].text

    // Append the new element to the topMenuElelement.
    topMenuEl.appendChild(element_a)
}

// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.querySelector('#sub-menu')

// Set the height subMenuElelement to be 100%.

subMenuEl.style.height = '100%'

// Set the background color of subMenuElto the value stored in the --sub-menu-bg CSS custom property.

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

// Add the class of flex-aroundto the subMenuElelement.

subMenuEl.className = 'flex-around'

// Set the CSS positionproperty of subMenuElto the value of absolute.

subMenuEl.style.position = 'absolute'

// Set the CSS topproperty of subMenuElto the value of 0.

subMenuEl.style.top = '0'

// Select and cache the all of the <a>elements 
// inside of topMenuElin a variable named topMenuLinks.

const topMenuLinks = document.querySelectorAll('a')

// console.log(topMenuLinks)

// Declare a global showingSubMenuvariable and initialize it to false;

showingSubMenu = false;

// Attach a delegated 'click' event listener to topMenuEl

// The first line of code of the event listener function should call the 
// event object's preventDefault()method.
topMenuEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.matches('a')) return;
    for (let i of topMenuLinks) {
        i.classList.remove('active')
    }
    showingSubMenu = false;
    subMenuEl.style.top = '0'
    e.target.className = 'active'
})

console.log()
// parent element - div id
//selecting an element
const cardsContainer = document.getElementById('cards-container')
const addButton = document.getElementById('add-btn')
const removeButton = document.getElementById('remove-btn')
const toggleButton = document.getElementById('toggle-btn')
// e.g. for class
// document.querySelector('.some-className')

const createCards = () => 
{
    if (cardsContainer.hasChildNodes())
    {
        return;
    }

    for (let i=0; i < 5; i++)
    {
        // create an element(
        const card = document.createElement('div')
        // add some content
        card.innerHTML = `<p>Element number ${i + 1}</p>`
        // add styles - class
        card.classList.add('card')
        // append element
        cardsContainer.appendChild(card)
    }
}

const removeCards = () => 
{
    // check if cardsContainer has child elements
    if (cardsContainer.hasChildNodes())
    {
        //remove child elements
        while(cardsContainer.firstChild)
        {
            cardsContainer.removeChild(cardsContainer.firstChild)
        }
    }
}

const changeCards = () =>
{
    const cards = document.querySelectorAll('.card')
    for (let i = 0; i < cards.length; i++) 
    {
        cards[i].classList.toggle('card--dark')
    }
}

// createCards();

// addEventListener - attaches an event listener to an element
// element.addEventListener(event, function)
addButton.addEventListener('click', createCards)
removeButton.addEventListener('click', removeCards)
toggleButton.addEventListener('click', changeCards)

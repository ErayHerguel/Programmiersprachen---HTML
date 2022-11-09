//selecting an element
const cardsContainer = document.getElementById('cards-container')
// document.querySelector('.some-className')

const createCards = () => 
{
    for (let i=0; i < 5; i++)
    {
        // create an element(
        const card = document.createElement('div')
        // add some content
        card.innerHTML = `<p>Element number ${i + 1}</p>`
        // add styles - class
        card.classList.add('card')
        cardsContainer.appendChild(card)

    }
}

createCards();
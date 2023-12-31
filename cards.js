// cards.js

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to reveal wishes when a card is clicked
function revealWishes(card) {
    card.classList.add('opened');
}

// Function to initialize the card order randomly
function initializeRandomCards() {
    const cards = document.querySelectorAll('.card');
    const cardContainer = document.querySelector('.card-container');

    // Convert NodeList to an array
    const cardArray = Array.from(cards);

    // Shuffle the array of cards
    shuffleArray(cardArray);

    // Append the shuffled cards to the card container
    cardArray.forEach((card) => {
        cardContainer.appendChild(card);
    });
}

// Call the initializeRandomCards function when the page loads
window.onload = initializeRandomCards;

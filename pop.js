const positiveQuotes = [
    "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    "It's okay to not be okay as long as you are not giving up.",
    "You are stronger than you know, braver than you believe, and smarter than you think.",
    "Healing doesn't mean the damage never existed. It means the damage no longer controls your life.",
    "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious. Having feelings doesn't make you a negative person. It makes you human.",
    "You are not a burden. You are a human with feelings, emotions, and needs.",
    "It's okay to ask for help. You don't have to go through this alone.",
    "Mental health is just as important as physical health.",
    "Your mental health matters more than anything else.",
    "You are worthy of love, care, and support.",
    "You are not defined by your struggles. You are defined by how you overcome them.",
    "Progress is progress, no matter how small.",
    "It's okay to take a break and focus on self-care.",
    "You are enough just as you are.",
    "One step at a time. One day at a time. You can do it.",
    "Your mental health is worth the effort.",
    "You are not alone in this battle.",
    "It's okay to not have it all together.",
    "You are not weak for having feelings. You are strong for dealing with them.",
    "Recovery is not a race. You don't have to get it all together right away.",
    "Your story is important, and it matters.",
    "Be kind to yourself. You are doing the best you can.",
    "Your mental health journey is unique to you.",
    "You are capable of healing and growing.",
    "Your thoughts do not define you.",
    "Self-compassion is key to mental well-being.",
    "You have the strength to face whatever comes your way.",
    "Your mental health is a lifelong journey, and it's worth it.",
    "There is hope even in the darkest moments.",
    "You are loved, valued, and appreciated just as you are.",
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * positiveQuotes.length);
    return positiveQuotes[randomIndex];
}

const popupContainer = document.getElementById('popup-container');
const popup = document.getElementById('popup');
const quoteText = document.getElementById('quote-text');
const closeButton = document.getElementById('close-button');

function showPopup() {
    const quote = getRandomQuote();
    quoteText.textContent = `"${quote}"`;
    popupContainer.style.display = 'block';
    setTimeout(closePopup, 20000); 
}

function closePopup() {
    popupContainer.style.display = 'none';
}

closeButton.addEventListener('click', closePopup);


setTimeout(showPopup, 3000);

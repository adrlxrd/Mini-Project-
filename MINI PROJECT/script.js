const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

const responses = {
    anxiety: [
        "Anxiety can feel overwhelming, but try deep breathing: Inhale for 4 seconds, hold for 4, exhale for 4.",
        "Ground yourself: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
        "It's okay to feel this way. Journaling your thoughts might help process them.",
        "Consider talking to a trusted friend or professional. You're not alone."
    ],
    stress: [
        "Take a short walk or stretch to release tension.",
        "Prioritize tasks: Do the most important first, break them into small steps.",
        "Practice mindfulness: Focus on the present moment.",
        "Ensure you're getting enough sleep and eating well."
    ],
    depression: [
        "Reach out to someone – sharing can lighten the load.",
        "Small wins: Get out of bed, shower, or take a 5-min walk.",
        "Sunlight and exercise can boost mood naturally.",
        "This is a reminder: Seek professional help if feelings persist. Helplines are available 24/7."
    ],
    sad: [
        "It's valid to feel sad. Allow yourself time to grieve or process.",
        "Do something comforting: Listen to favorite music, watch a funny show.",
        "Connect with a loved one.",
        "Self-care: Warm bath, favorite snack."
    ],
    lonely: [
        "Loneliness is common. Try joining online communities or local groups.",
        "Reach out to a friend via text or call.",
        "Pets or volunteering can provide connection.",
        "Practice self-compassion: You're worthy of love."
    ],
    angry: [
        "Take deep breaths to cool down.",
        "Physical activity like punching a pillow or running helps.",
        "Write down what's upsetting you, then tear it up.",
        "Pause before reacting."
    ],
    default: [
        "I'm listening. Tell me more about how you're feeling.",
        "Common issues include anxiety, stress, or feeling down – does any resonate?",
        "Remember, professional support is key for personalized advice.",
        "You're taking a positive step by reaching out."
    ]
};

function getResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('anxiety') || lowerMsg.includes('worried')) {
        return responses.anxiety[Math.floor(Math.random() * responses.anxiety.length)];
    } else if (lowerMsg.includes('stress') || lowerMsg.includes('overwhelmed')) {
        return responses.stress[Math.floor(Math.random() * responses.stress.length)];
    } else if (lowerMsg.includes('depress') || lowerMsg.includes('sad') || lowerMsg.includes('down')) {
        return responses.depression[Math.floor(Math.random() * responses.depression.length)];
    } else if (lowerMsg.includes('lonely') || lowerMsg.includes('alone')) {
        return responses.lonely[Math.floor(Math.random() * responses.lonely.length)];
    } else if (lowerMsg.includes('angry') || lowerMsg.includes('mad') || lowerMsg.includes('frustrated')) {
        return responses.angry[Math.floor(Math.random() * responses.angry.length)];
    } else {
        return responses.default[Math.floor(Math.random() * responses.default.length)];
    }
}

function addMessage(text, isUser) {
    const message = document.createElement('div');
    message.className = `message ${isUser ? 'user' : 'bot'}`;
    message.textContent = text;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    userInput.value = '';

    setTimeout(() => {
        const response = getResponse(message);
        addMessage(response, false);
    }, 500);
}

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

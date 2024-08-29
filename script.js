document.getElementById('get-advice-button').addEventListener('click', function() {
    const adviceArray = [
        "Believe in yourself!",
        "Stay positive, work hard, make it happen.",
        "Don’t watch the clock; do what it does. Keep going.",
        "You are stronger than you think.",
        "Every day is a second chance."
    ];
    const randomAdvice = adviceArray[Math.floor(Math.random() * adviceArray.length)];
    document.getElementById('advice').innerText = randomAdvice;
});


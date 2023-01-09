const question = document.getElementById("askQuestion")
const magic8BallReplies = document.getElementById("ballReplies")
const clickButton = document.getElementById("answerApp")

const diffAnswers = ["YES!", "No", "You should definetly go for it", "I wouldn't if I were you",
"maybe", "Ask Again", "It may be rough, but if you don't do it, then who will?"]

clickButton.addEventListener("click", function() {
    const phrases = Math.floor(Math.random() * diffAnswers.length)
    magic8BallReplies.textContent = diffAnswers[phrases]
})
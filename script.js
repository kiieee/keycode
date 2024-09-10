const keyInfoDiv = document.getElementById('keyInfo');
document.addEventListener('keydown', function(event) {
const keyName = event.key;
const keyDetails = event.code;

keyInfoDiv.textContent = `Key: ${keyName} | Key Details: ${keyDetails}`;
});
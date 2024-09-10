const keyInfoDiv = document.getElementById('keyInfo');
document.addEventListener('keydown', function(event) {
const keyName = event.key;
const keyDetails = event.code;
const charCode = keyName.charCodeAt(0);

keyInfoDiv.textContent = `Key: ${keyName} | Key Code: ${keyDetails} | Character Code: ${charCode}`;
});
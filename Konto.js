const srodki = document.getElementById("valuee")
const startTime = new Date('2025-06-06T00:00:00');

function getSecondsSinceStart() {
  const now = new Date();
  return Math.floor((now - startTime) / 1000);
}

console.log(getSecondsSinceStart());
srodki.textContent = "-"+getSecondsSinceStart();
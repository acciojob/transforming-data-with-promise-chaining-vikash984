//your JS code here. If required.
// Get the DOM elements
const btn = document.getElementById('btn');
const input = document.getElementById('ip');
const output = document.getElementById('output');

// Helper function for delayed resolution
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

btn.addEventListener('click', () => {
  const num = Number(input.value);
  output.textContent = '';  // clear previous output

  delay(2000, num)
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delay(2000, result * 2);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delay(1000, result - 3);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delay(1000, result / 2);
    })
    .then(result => {
      output.textContent = `Result: ${result}`;
      return delay(1000, result + 10);
    })
    .then(finalResult => {
      output.textContent = `Final Result: ${finalResult}`;
    })
    .catch(err => {
      output.textContent = `Error: ${err.message}`;
    });
});


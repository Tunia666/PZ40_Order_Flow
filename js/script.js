const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const steps = document.getElementById('steps');
const status = document.getElementById('status');

let isRunning = false;
let currentTimer = null;

// Задания 1 и 2
function runStep(text, next) {
  currentTimer = setTimeout(() => {
    const li = document.createElement('li');
    li.textContent = text;
    steps.appendChild(li);
    status.textContent = text;

    if (typeof next === 'function') {
      next();
    }
  }, 700);
}

// Задания 3 и 4
startButton.addEventListener('click', () => {
  if (isRunning) return;

  isRunning = true;
  startButton.disabled = true;
  steps.replaceChildren(); // Очищаем старый список перед новым запуском

  runStep('Заказ принят', () => {
    runStep('Проверка выполнена', () => {
      runStep('Заказ готов', () => {
        isRunning = false;
        startButton.disabled = false;
        status.textContent = 'Все этапы завершены';
      });
    });
  });
});

// Задание 5
resetButton.addEventListener('click', () => {
  clearTimeout(currentTimer);
  isRunning = false;
  steps.replaceChildren();
  startButton.disabled = false;
  status.textContent = 'Ожидание нового заказа.';
});

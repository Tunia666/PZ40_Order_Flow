"use strict";

const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");
const steps = document.querySelector("#steps");
const status = document.querySelector("#status");
let timerId = null;
let isRunning = false;

// TODO 1. Функция должна запланировать один этап через 700 мс.
// После задержки: создайте li, запишите text, добавьте li в steps.
// Затем, если передан next, вызовите next().
function runStep(text, next) {
  timerId = setTimeout(() => {
    const li = document.createElement("li");
    li.textContent = text;
    steps.append(li);
    status.textContent = 'Текущий этап: {text}';
    if (typeof next == 'function') {
      next();
    }
  }, 700);
}
startButton.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;
  startButton.disabled = true;
  steps.replaceChildren();
  status.textContent = "Выполняем заказ...";

  runStep("Заказ принят", () => {
    runStep("Проверка выполнена", () => {
      runStep("Заказ готов", () => {
        isRunning = false;
        startButton.disabled = false;
        status.textContent = "Все этапы завершены";
      });
    });
  });
});

resetButton.addEventListener("click", () => {
  clearTimeout(timerId);
  timerId = null;
  isRunning = false;
  startButton.disabled = false;
  steps.replaceChildren();
  status.textContent = 'Ожидание запуска';
});

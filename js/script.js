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
    steps.appendChild(li);
    status.textContent = text;

    if (typeof next === "function") {
      next();
    }
  }, 700);
}

// TODO 2. Свяжите три этапа вложенными callback-функциями:
// «Заказ принят» -> «Проверка выполнена» -> «Заказ готов».
// После последнего этапа верните isRunning = false и включите кнопку.
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

// TODO 3. Отмените текущий таймер и верните интерфейс к началу.
resetButton.addEventListener("click", () => {
  clearTimeout(timerId);
  timerId = null;
  isRunning = false;
  steps.replaceChildren();
  startButton.disabled = false;
  status.textContent = "Ожидание запуска";
});

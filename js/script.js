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
  function addStep() {
    const item = document.createElement("li");
    item.textContent = text;
    steps.append(item);
    status.textContent = text;
    if (next) next();
  }
  timerId = setTimeout(addStep, 700);
}

// TODO 2. Свяжите три этапа вложенными callback-функциями:
// «Заказ принят» → «Проверка выполнена» → «Заказ готов».
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
        status.textContent = "этапы завершены";
      });
    });
  });
});

// TODO 3. Отмените текущий таймер и верните интерфейс к началу.
resetButton.addEventListener("click", () => {
  clearTimeout(timerId);
  timerId = null;
  isRunning = false;
  startButton.disabled = false;
  steps.replaceChildren();
  status.textContent = "Ожидание нового заказа";
});

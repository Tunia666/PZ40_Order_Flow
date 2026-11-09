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
function runStep(text, next) {}

// TODO 2. Свяжите три этапа вложенными callback-функциями:
// «Заказ принят» → «Проверка выполнена» → «Заказ готов».
// После последнего этапа верните isRunning = false и включите кнопку.
startButton.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;
  startButton.disabled = true;
  steps.replaceChildren();
  status.textContent = "Выполняем заказ...";
});

// TODO 3. Отмените текущий таймер и верните интерфейс к началу.
resetButton.addEventListener("click", () => {});

"use strict";

const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");
const steps = document.querySelector("#steps");
const status = document.querySelector("#status");

let timerId = null;
let isRunning = false;

function runStep(text, next) {
  timerId = setTimeout(() => {
    const item = document.createElement("li");
    item.textContent = text;
    steps.append(item);
    status.textContent = `Выполнен этап: ${text}`;
    timerId = null;

    if (typeof next === "function") {
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
        runStep("Клиент уведомлён", () => {
          isRunning = false;
          startButton.disabled = false;
          status.textContent = "Все этапы завершены";
        });
      });
    });
  });
});

resetButton.addEventListener("click", () => {
  if (timerId !== null) {
    clearTimeout(timerId);
    timerId = null;
  }

  isRunning = false;
  startButton.disabled = false;
  steps.replaceChildren();
  status.textContent = "Ожидание нового заказа.";
});

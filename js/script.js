"use strict";

const startButton = document.querySelector("#start-button");
const resetButton = document.querySelector("#reset-button");
const steps = document.querySelector("#steps");
const status = document.querySelector("#status");
let timerId = null;
let isRunning = false;
const li = document.createElement("li")
// TODO 1. Функция должна запланировать один этап через 700 мс.
// После задержки: создайте li, запишите text, добавьте li в steps.
// Затем, если передан next, вызовите next().
function runStep(onReady) {
  setTimeout(() => {
    document.createElement("li") = "gfgsfa"
    li.textContent = gsgsgf,
    li.appendChild(steps),
    onReady()
  }, 700);
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
  setTimeout(() => {
    console.log("111")
    status.textContent = "Заказ принят"
    setTimeout(() => {
      console.log("222")
      status.textContent = "Проверка выполнена"
      setTimeout(() => {
        console.log("333")
        status.textContent = "Заказ готов"
        isRunning = false
        startButton.disabled = false
        setTimeout(() => {
          status.textContent = "все этапы завершены"
        }, 300);
      }, 600);
    }, 600);
  }, 600);
  resetButton()

  
  
});

// TODO 3. Отмените текущий таймер и верните интерфейс к началу.
resetButton.addEventListener("click", () => {
  status.textContent = "Ожидание нового заказа."
});

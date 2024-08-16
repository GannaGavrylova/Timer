import styles from "./styles.module.css";

import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    let interval = null;
    if (stop) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!stop && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, stop]);

  function startTimer() {
    setStop(true);
  }

  function stopTimer() {
    setStop(false);
  }

  function resetTimer() {
    setStop(false);
    setTime(0);
  }

  return (
    <div className={styles.timer_container}>
      <h1>I am Timer:</h1>
      <p>{time}</p>
      <button onClick={startTimer}>Старт</button>
      <button onClick={stopTimer}>Стоп</button>
      <button onClick={resetTimer}>Сброс</button>
    </div>
  );
}
export default Timer;

// 2. Используйте useState для управления текущим временем таймера и его активным состоянием.

// 3. Создайте useEffect, который будет обрабатывать логику таймера, активируя его работу при включенном состоянии и останавливая при выключении.
// 4. Определите функцию для начала отсчета времени, которая изменяет активное состояние таймера.
// 5. Определите функцию для остановки таймера и функцию для сброса таймера до начального состояния.
// 6. Отрендерите кнопки управления таймером (Старт, Стоп, Сброс) и блок для отображения времени.

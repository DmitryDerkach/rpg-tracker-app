// src/app.js

import { Character } from './character.js';
import { ApiService } from './api.js';
import { UIManager } from './ui.js';

const ui = new UIManager();
let myHero; // Переменная для хранения инстанса персонажа

// Функция инициализации приложения (async позволяет внутри использовать await)
async function initApplication() {
    try {
        console.log("Идет загрузка профиля...");
        ui.setLoading(true);
        
        // Ключевое слово await СТАВИТ НА ПАУЗУ выполнение этой функции, 
        // пока Promise из getCharacter() не выполнится (пройдет 1 секунда)
        const savedData = await ApiService.getCharacter();
        
        myHero = new Character('Тестировщик', savedData);
        ui.updateStats(myHero.getStats());

        // Только после загрузки данных мы "включаем" кнопки
        setupEventListeners();
    } catch (error) {
        console.error("Ошибка при старте:", error);
        alert("Не удалось загрузить данные!");
    } finally {
        ui.setLoading(false);
    }
}

// Выносим назначение событий в отдельную функцию
function setupEventListeners() {
    ui.btnGood.addEventListener('click', async () => {
        myHero.addExperience(20);
        ui.updateStats(myHero.getStats()); // Сразу обновляем экран (Оптимистичный UI)
        await saveProgress(); // Отправляем данные на "сервер"
    });

    ui.btnBad.addEventListener('click', async () => {
        myHero.removeExperience(10);
        ui.updateStats(myHero.getStats());
        await saveProgress();
    });
}

// Общая функция сохранения
async function saveProgress() {
    ui.setLoading(true); // Блокируем UI
    try {
        await ApiService.saveCharacter(myHero.getStats());
        console.log("Прогресс сохранен!");
    } catch (error) {
        console.error("Сбой:", error);
        alert(`Ошибка сохранения: ${error.message}`);
        // В реальном приложении здесь был бы откат состояния (rollback)
    } finally {
        ui.setLoading(false); // В любом случае разблокируем UI
    }
}

// Запускаем всё!
initApplication();
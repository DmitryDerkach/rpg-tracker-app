// Импортируем наш класс из соседнего файла
import { Character } from './character.js';

// Инициализируем персонажа
const myHero = new Character('Тестировщик-Автоматизатор');

// Находим элементы управления на странице (DOM элементы)
const levelDisplay = document.getElementById('level-display');
const xpDisplay = document.getElementById('xp-display');
const btnGood = document.getElementById('btn-good');
const btnBad = document.getElementById('btn-bad');

// Функция обновления интерфейса
function updateUI() {
    const stats = myHero.getStats();
    levelDisplay.textContent = stats.level;
    xpDisplay.textContent = `${stats.xp} / ${stats.xpToNextLevel}`;
}

// Вешаем слушатели событий на кнопки
btnGood.addEventListener('click', () => {
    myHero.addExperience(20);
    updateUI();
});

btnBad.addEventListener('click', () => {
    myHero.removeExperience(10);
    updateUI();
});

// Первичная отрисовка при загрузке страницы
updateUI();
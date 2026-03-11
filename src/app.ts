// src/app.ts
import { Character } from './character.js';
import { ApiService } from './api.js';
import { UIManager } from './ui.js';

const ui = new UIManager();
let myHero: Character; // Явно указываем, что тут будет лежать объект Character

async function initApplication(): Promise<void> {
    try {
        ui.setLoading(true);
        
        // Получаем наш типизированный ответ
        const response = await ApiService.getCharacter();
        const savedData = response.data || null; // Если data нет, передаем null
        
        myHero = new Character('Тестировщик', savedData);
        ui.updateStats(myHero.getStats());

        setupEventListeners();
    } catch (error) {
        console.error("Ошибка при старте:", error);
    } finally {
        ui.setLoading(false);
    }
}

function setupEventListeners(): void {
    ui.btnGood.addEventListener('click', async () => {
        myHero.addExperience(20);
        ui.updateStats(myHero.getStats());
        await saveProgress();
    });

    ui.btnBad.addEventListener('click', async () => {
        myHero.removeExperience(10);
        ui.updateStats(myHero.getStats());
        await saveProgress();
    });
}

async function saveProgress(): Promise<void> {
    ui.setLoading(true);
    try {
        await ApiService.saveCharacter(myHero.getStats());
    } catch (error: any) { // Перехват неизвестных ошибок помечаем как any
        console.error("Сбой:", error);
    } finally {
        ui.setLoading(false);
    }
}

initApplication();
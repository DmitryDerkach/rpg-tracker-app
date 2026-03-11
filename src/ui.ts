// src/ui.ts
import { CharacterStats } from './types.js';

export class UIManager {
    // Явно описываем типы HTML-элементов
    levelDisplay: HTMLSpanElement;
    xpDisplay: HTMLSpanElement;
    btnGood: HTMLButtonElement;
    btnBad: HTMLButtonElement;

    constructor() {
        // as заставляет TS поверить, что элемент точно существует и является нужным тегом
        this.levelDisplay = document.getElementById('level-display') as HTMLSpanElement;
        this.xpDisplay = document.getElementById('xp-display') as HTMLSpanElement;
        this.btnGood = document.getElementById('btn-good') as HTMLButtonElement;
        this.btnBad = document.getElementById('btn-bad') as HTMLButtonElement;
    }

    updateStats(stats: CharacterStats): void {
        this.levelDisplay.textContent = stats.level.toString(); // textContent требует строку
        this.xpDisplay.textContent = `${stats.xp} / ${stats.xpToNextLevel}`;
    }

    setLoading(isLoading: boolean): void {
        this.btnGood.disabled = isLoading;
        this.btnBad.disabled = isLoading;
        this.btnGood.textContent = isLoading ? "Сохраняю..." : "Сделал полезное дело (+20 XP)";
    }
}
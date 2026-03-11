// src/ui.js

export class UIManager {
    constructor() {
        this.levelDisplay = document.getElementById('level-display');
        this.xpDisplay = document.getElementById('xp-display');
        this.btnGood = document.getElementById('btn-good');
        this.btnBad = document.getElementById('btn-bad');
    }

    updateStats(stats) {
        this.levelDisplay.textContent = stats.level;
        this.xpDisplay.textContent = `${stats.xp} / ${stats.xpToNextLevel}`;
    }

    // Блокируем кнопки во время запроса, чтобы юзер не накликал лишнего
    setLoading(isLoading) {
        this.btnGood.disabled = isLoading;
        this.btnBad.disabled = isLoading;
        
        if (isLoading) {
            this.btnGood.textContent = "Сохраняю...";
        } else {
            this.btnGood.textContent = "Сделал полезное дело (+20 XP)";
        }
    }
}
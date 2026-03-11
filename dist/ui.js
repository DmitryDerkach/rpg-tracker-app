export class UIManager {
    // Явно описываем типы HTML-элементов
    levelDisplay;
    xpDisplay;
    btnGood;
    btnBad;
    constructor() {
        // as заставляет TS поверить, что элемент точно существует и является нужным тегом
        this.levelDisplay = document.getElementById('level-display');
        this.xpDisplay = document.getElementById('xp-display');
        this.btnGood = document.getElementById('btn-good');
        this.btnBad = document.getElementById('btn-bad');
    }
    updateStats(stats) {
        this.levelDisplay.textContent = stats.level.toString(); // textContent требует строку
        this.xpDisplay.textContent = `${stats.xp} / ${stats.xpToNextLevel}`;
    }
    setLoading(isLoading) {
        this.btnGood.disabled = isLoading;
        this.btnBad.disabled = isLoading;
        this.btnGood.textContent = isLoading ? "Сохраняю..." : "Сделал полезное дело (+20 XP)";
    }
}

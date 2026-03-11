// src/character.js

export class Character {
    // Добавляем второй опциональный параметр
    constructor(name, savedData = null) {
        this.name = name;
        
        // Если данные есть - берем их, если нет - ставим дефолтные
        if (savedData) {
            this.level = savedData.level;
            this.xp = savedData.xp;
            this.xpToNextLevel = savedData.xpToNextLevel;
        } else {
            this.level = 1;
            this.xp = 0;
            this.xpToNextLevel = 100;
        }
    }

    addExperience(points) {
        this.xp += points;
        if (this.xp >= this.xpToNextLevel) {
            this.level += 1;
            this.xp -= this.xpToNextLevel;
            this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.5);
        }
    }

    removeExperience(points) {
        this.xp -= points;
        if (this.xp < 0) this.xp = 0;
    }

    getStats() {
        return {
            level: this.level,
            xp: this.xp,
            xpToNextLevel: this.xpToNextLevel
        };
    }
}
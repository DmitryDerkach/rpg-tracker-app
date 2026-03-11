// src/character.ts
export class Character {
    // Явно указываем типы полей класса
    name;
    level;
    xp;
    xpToNextLevel;
    // В конструкторе указываем, что savedData может быть либо типа CharacterStats, либо null
    constructor(name, savedData = null) {
        this.name = name;
        if (savedData) {
            this.level = savedData.level;
            this.xp = savedData.xp;
            this.xpToNextLevel = savedData.xpToNextLevel;
        }
        else {
            this.level = 1;
            this.xp = 0;
            this.xpToNextLevel = 100;
        }
    }
    // Указываем тип принимаемого параметра (points: number) и тип возвращаемого значения (void)
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
        if (this.xp < 0)
            this.xp = 0;
    }
    // Указываем, что метод строго возвращает объект структуры CharacterStats
    getStats() {
        return {
            level: this.level,
            xp: this.xp,
            xpToNextLevel: this.xpToNextLevel
        };
    }
}

// Экспортируем класс, чтобы его можно было использовать в других файлах
export class Character {
    constructor(name) {
        this.name = name;
        this.level = 1;
        this.xp = 0;
        this.xpToNextLevel = 100;
    }

    // Метод добавления опыта
    addExperience(points) {
        this.xp += points;
        
        // Логика повышения уровня
        if (this.xp >= this.xpToNextLevel) {
            this.level += 1;
            this.xp = this.xp - this.xpToNextLevel; // переносим остаток на следующий уровень
            this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.5); // следующий уровень требует больше опыта
            console.log(`Поздравляем! ${this.name} достиг уровня ${this.level}!`);
        }
    }

    // Метод потери опыта
    removeExperience(points) {
        this.xp -= points;
        // Не даем опыту уйти в минус на текущем уровне
        if (this.xp < 0) {
            this.xp = 0;
        }
    }

    // Возвращает текущее состояние персонажа
    getStats() {
        return {
            level: this.level,
            xp: this.xp,
            xpToNextLevel: this.xpToNextLevel
        };
    }
}
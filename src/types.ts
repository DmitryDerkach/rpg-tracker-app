// src/types.ts

// 1. Описываем структуру данных персонажа (наш DTO)
export interface CharacterStats {
    level: number;
    xp: number;
    xpToNextLevel: number;
}

// 2. Используем Дженерики (Generics) для ответов сервера
// Прямо как Response<T> в Java!
export interface ApiResponse<T> {
    status: 'ok' | 'error';
    data?: T;         // Поле опционально (знак вопроса)
    error?: string;   // Поле опционально
}

// src/types.ts

export interface CharacterStats {
    level: number;
    xp: number;
    xpToNextLevel: number;
}

export interface ApiResponse<T> {
    status: 'ok' | 'error';
    data?: T;
    error?: string;
}

// НОВОЕ: Интерфейс для конкретного действия (пригодится, если захотим делать историю)
export interface Action {
    id: number;
    type: 'good' | 'bad';
    points: number;
    description: string;
}

// НОВОЕ: Правила игры (чтобы избавиться от магических чисел вроде 1.5 в коде)
export interface LevelUpRules {
    baseXp: number;
    multiplier: number;
}
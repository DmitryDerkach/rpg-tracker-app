// src/api.js

const STORAGE_KEY = 'rpg_character_data';

export class ApiService {
    // Метод получения данных (эмуляция GET-запроса)
    static getCharacter() {
        // Promise (Обещание) - это объект, который говорит: "Я верну результат... попозже"
        return new Promise((resolve, reject) => {
            // setTimeout эмулирует сетевую задержку в 1 секунду
            setTimeout(() => {
                try {
                    // Читаем из localStorage. Там лежат только строки, поэтому парсим JSON
                    const data = localStorage.getItem(STORAGE_KEY);
                    // resolve - функция, которая сигнализирует об успехе Promise
                    resolve(data ? JSON.parse(data) : null);
                } catch (error) {
                    // reject - сигнализирует об ошибке
                    reject(new Error("Ошибка чтения данных"));
                }
            }, 1000);
        });
    }

    // Метод сохранения данных (эмуляция POST-запроса)
    static saveCharacter(characterData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    // Искусственно создадим шанс ошибки 10% для тренировки try/catch
                    if (Math.random() < 0.1) {
                        throw new Error("Сервер недоступен (Ошибка 500)");
                    }
                    
                    // Сохраняем строку JSON в память браузера
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(characterData));
                    resolve({ status: 'ok' });
                } catch (error) {
                    reject(error);
                }
            }, 500); // 0.5 секунды на сохранение
        });
    }
}
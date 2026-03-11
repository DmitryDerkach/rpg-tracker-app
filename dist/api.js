const STORAGE_KEY = 'rpg_character_data';
export class ApiService {
    // Используем дженерик: Promise вернет ApiResponse, внутри которого будет CharacterStats (или null)
    static getCharacter() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const data = localStorage.getItem(STORAGE_KEY);
                    // Явно указываем компилятору тип после парсинга JSON
                    const parsed = data ? JSON.parse(data) : null;
                    resolve({ status: 'ok', data: parsed });
                }
                catch (error) {
                    reject(new Error("Ошибка чтения данных"));
                }
            }, 1000);
        });
    }
    // Здесь мы ничего не возвращаем в data, поэтому передаем void (пустоту)
    static saveCharacter(characterData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    if (Math.random() < 0.1) {
                        throw new Error("Сервер недоступен");
                    }
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(characterData));
                    resolve({ status: 'ok' });
                }
                catch (error) {
                    reject(error);
                }
            }, 500);
        });
    }
}

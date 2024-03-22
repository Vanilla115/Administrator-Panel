export async function fetchData() {
    try {
        const response = await fetch("http://localhost:4444/api/users");
        if (!response.ok) {
            throw new Error('Ошибка HTTP: ' + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

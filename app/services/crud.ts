export type FootballPlayerRequest = {
    firstName:string
    lastName:string
    gender:string
    dateofbirth:Date
    teamname:string
    country:string
}

export const getAllPlayers = async () => {
    try {
        const response = await fetch("https://localhost:7276/Football");
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Ошибка при запросе списка футболистов:', error);
        throw error;
    }
}


export const createPlayer = async (request: FootballPlayerRequest) => {
    try {
        const response = await fetch("https://localhost:7276/Football", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        });
        if (!response.ok) {
            throw new Error('Ошибка при создании футболиста');
        }
    } catch (error) {
        console.error('Ошибка при создании футболиста:', error);
        throw error;
    }
}

export const updatePlayer = async (id: string, request: FootballPlayerRequest) => {
    try {
        const response = await fetch(`https://localhost:7276/Football/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        });
        if (!response.ok) {
            throw new Error('Ошибка при обновлении футболиста');
        }
    } catch (error) {
        console.error('Ошибка при обновлении футболиста:', error);
        throw error;
    }
}

export const deletePlayer = async (id: string) => {
    try {
        const response = await fetch(`https://localhost:7276/Football/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            throw new Error('Ошибка при удалении футболиста');
        }
    } catch (error) {
        console.error('Ошибка при удалении футболиста:', error);
        throw error;
    }
}

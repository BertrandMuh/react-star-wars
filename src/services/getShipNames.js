
import axios from "axios"


export const apiRequest = async (num) => {
    let params = `starships/?page=${num}`;
    let apiResponse = await axios(`https://swapi.dev/api/${params}`);
    let data = apiResponse.data;
    return data;
}

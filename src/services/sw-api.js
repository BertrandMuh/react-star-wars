
import axios from "axios"


export const apiRequest = async () => {
    let params = `starships/`;
    let apiResponse = await axios(`https://swapi.dev/api/${params}`);
    let data = apiResponse.data;
    return data;
}
export const apiRequestPage = async (page) => {
    let params = `starships/?page=${page}`;
    let apiResponse = await axios(`https://swapi.dev/api/${params}`);
    let data = apiResponse.data;
    return data;
}

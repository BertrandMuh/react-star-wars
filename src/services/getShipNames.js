
import axios from "axios"


export const apiRequest = async () => {
    let params = 'starships';
    let apiResponse = await axios(`https://swapi.dev/api/${params}`);
    let data = apiResponse.data.results;
    return data;

}

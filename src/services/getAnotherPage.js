
import axios from "axios"

export const requestThePage = async (page) => {
    let params = `starships/?page=${page}`;
    let apiResponse = await axios(`https://swapi.dev/api/${params}`)
    let data = apiResponse.data;

    return data
}
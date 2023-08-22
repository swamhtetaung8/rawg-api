import axios from "axios";
import { endPoints } from "./endPoints"

const currentYear = new Date().getFullYear();

export const getGames = async() => {
    const {data} = await axios.get(endPoints.gameList+`?key=${import.meta.env.VITE_RAWP_API_KEY}&dates=${currentYear-1}-01-01,${currentYear}-12-31`);
    return data;
}
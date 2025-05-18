import axios from "axios";
import { BASE_URL } from "../constants/index.js";
import { SarcasticQuote } from "../types/index.js";


export async function getSarcasticQuotes(): Promise<SarcasticQuote[] | undefined> {
    const response = await axios.get(BASE_URL + '/sarcasm/all');

    if (response.status !== 200) {
        return;
    }

    return response.data;
}

export async function getRandomSarcasticQuote(): Promise<SarcasticQuote | undefined> {
    const response = await axios.get(BASE_URL + '/sarcasm/random');

    if (response.status !== 200) {
        return;
    }

    return response.data;
}
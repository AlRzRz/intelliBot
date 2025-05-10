import fetchWrapper from "./helpers.js";
import { PolygonKey, FinnKey } from './keys.js'

const polyAuth = `?apiKey=${PolygonKey}`
const PolygonAPI = new fetchWrapper('https://api.polygon.io');
const FinnAPI = new fetchWrapper();

export const getMainData = async (ticker) => {
    try {
        const data = await PolygonAPI.get(`/v3/reference/tickers/${ticker}` + polyAuth)
        if (data.status !== 'OK') {
            throw new Error(data.error);
        }
        return data.results;
    } catch (error) {
        console.error('Error fetching main data:', error);
        throw error; // Re-throw the error to handle it in the UI
    }
}


export const getFinancialData = async(ticker) => {

}

export const getSentimentData = async(ticker) => {
    
}
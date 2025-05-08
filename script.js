import fetchWrapper from "./helpers.js";
import { PolygonKey } from './keys.js'

const PolygonAuthQueryString = `?apiKey=${PolygonKey}`
const PolygonAPI = new fetchWrapper('https://api.polygon.io');

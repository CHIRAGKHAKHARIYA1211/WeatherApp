import { WHEATHER_APP_ID } from "../constants/AppSecret";
import API from "../utils/api";

//For getting whole city list
export async function fetchCityList(lat, lon, limit = 50) {
  return API.GET(
    `find?lat=${lat}&lon=${lon}&cnt=${limit}&appid=${WHEATHER_APP_ID}`
  );
}

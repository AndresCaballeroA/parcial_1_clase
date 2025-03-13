import axios from "axios";

const API_URL = "https://my.api.mockaroo.com/parcial.json?key=1925cd50";

export const fetchUserData = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

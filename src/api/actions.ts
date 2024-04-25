import axios, { AxiosError } from "axios";

const API_URL = "http://localhost:3000/api";

export const getEnergyData = async (region: string): Promise<EnergyData> => {
    return new Promise<EnergyData>((resolve, reject) => {
        axios
            .get(`${API_URL}/energy/${region}`)
            .then((res) => {
                resolve({
                    region: region,
                    production: res.data.production,
                    consumption: res.data.consumption,
                    price: res.data.price,
                    timestamp: new Date(res.data.timestamp),
                });
            })
            .catch((error) => {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    if (axiosError.response?.status === 404) {
                        reject("Region not found");
                    } else {
                        // It's a good practice to reject with an Error object
                        reject(axiosError.message);
                    }
                } else {
                    // Handle non-Axios errors
                    reject("An unknown error occurred");
                }
            });
    });
};

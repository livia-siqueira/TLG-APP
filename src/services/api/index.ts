import axios from 'axios'
import AsyncStorage from  '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: 'http://10.0.0.101:3333',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

api.interceptors.request.use(async (config) => {
    try {
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    } catch (e: any) {
      throw new Error(e.message);
    }
  });
  
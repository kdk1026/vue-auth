import axios from "axios";
import { useStore } from "vuex";
import { getToken, isTokenExpired } from "./token";

export const useAxios = () => {
    const store = useStore();
    
    const baseURL = `${process.env.VUE_APP_API_URL}`;

    const instance = axios.create({
        baseURL: baseURL
    });
    
    instance.interceptors.request.use(
        (config) => {
            store.dispatch('loading/setIsLoading', true);

            const accessToken = getToken();
    
            if ( accessToken ) {
                console.log( isTokenExpired(accessToken) );
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
    
            return config;
        },
        (error) => {
            store.dispatch('loading/setIsLoading', false);

            console.log(error);
            return Promise.reject(error);
        }
    );
    
    instance.interceptors.response.use(
        (response) => {
            store.dispatch('loading/setIsLoading', false);

            if ( response.status === 404 ) {
                console.log('404 페이지로 넘어가야 함!');
            }
    
            return response;
        },
        async (error) => {
            store.dispatch('loading/setIsLoading', false);
            
            // console.log(error);
            if ( error.response?.status === 401 ) {
                // https://leeseong010.tistory.com/133
            }
            return Promise.reject(error);
        }
    );

    return {instance};
};
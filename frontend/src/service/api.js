import axios from 'axios';

export const getNews = async () => {
    const URL = 'https://newsapi.org/v2/everything?q=apple&from=2024-08-11&to=2024-08-11&sortBy=popularity&apiKey=1630733f01b6491cad00fb67a11bddbd';
    try{
        return await axios.get(`${URL}`);
    }
    catch(error){
        console.log('Error while calling get news api ', error);
    }
} 
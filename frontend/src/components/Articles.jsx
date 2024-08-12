import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Article from "./Article";


const Articles = () => {
    
    const[news, setNews] = useState([]);

    useEffect(() =>{
        dailyNews();
    },[]);

    const dailyNews = async() => {
        try {
            let response = await getNews();
            setNews(response.data.articles);
        } 
        catch (error) {
            console.log(error);
            console.log(error.message);   
        }
        
    }

    return(
        <Box>
                {
                    news.map(data => (
                        <Article data= {data} />
                    ))
                }
        </Box>
    )
}

export default Articles;

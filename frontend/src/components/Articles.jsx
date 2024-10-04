import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Article from "./Article";

const Articles = () => {
    
    const [news, setNews] = useState([]);

    useEffect(() => {
        if (news.length === 0) {  // Only fetch if news is empty
            dailyNews();
        }
    }, [news]); // Add 'news' as a dependency to avoid unnecessary fetching

    const dailyNews = async () => {
        try {
            let response = await getNews();
            setNews(response.data.articles);
        } catch (error) {
            console.log(error);
            console.log(error.message);   
        }
    };

    return (
        <Box>
            {
                news.map((data, index) => (
                    <Article key={index} data={data} />
                ))
            }
        </Box>
    );
};

export default Articles;

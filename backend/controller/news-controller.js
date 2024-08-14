import axios from 'axios';
import newsModel from '../model/new-schema.js';

const URL = 'https://newsapi.org/v2/everything?q=apple&from=2024-08-11&to=2024-08-11&sortBy=popularity&apiKey=1630733f01b6491cad00fb67a11bddbd';

export const getNews = async (req, response) => {
    try {
        const apiResponse = await axios.get(URL);
        const articles = apiResponse.data.articles;
        const savedArticles = [];

        for (let article of articles) {
            // Check if the article already exists
            
                const news = new newsModel({
                    title: article.title,
                    author: article.author,
                    description: article.description,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    publishedAt: article.publishedAt,
                    publisher: article.source.name,
                });

                const savedArticle = await news.save(); // Save the news article
                savedArticles.push(savedArticle); // Add to array
        }

        response.status(200).json({
            message: 'News processed successfully',
            articles: savedArticles,
        });

    } catch (error) {
        console.error('Error fetching or saving news:', error.message);
        response.status(500).json({ message: error.message });
    }
};

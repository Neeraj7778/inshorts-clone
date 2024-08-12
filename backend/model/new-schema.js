import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    publisher: {
        type: String,
        default:null,
    },
    title: {
        type: String,
        default:null,
    },
    author: {
        type: String,
        default:null,

    },
    url: {
        type: String,
        default:null,
    },
    urlToImage: {
        type: String,
        default:null,
    },
    publishedAt: {
        type: String,
        default:null,
    },
});

const newsModel = mongoose.model.news || mongoose.model("news", newsSchema);

export default newsModel;

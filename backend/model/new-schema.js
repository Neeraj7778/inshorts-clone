import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    publisher: {
        type: String,
        default:null,
        // required: true
    },
    title: {
        type: String,
        default:null,
        // required: true
    },
    author: {
        type: String,
        default:null,
        // required: true
    },
    url: {
        type: String,
        default:null,
        // required: true,
        // unique: true
    },
    urlToImage: {
        type: String,
        default:null,
        // required: true,
        // unique: true
    },
    publishedAt: {
        type: String,
        default:null,
    },
});

const newsModel = mongoose.model.news || mongoose.model("news", newsSchema);

export default newsModel;

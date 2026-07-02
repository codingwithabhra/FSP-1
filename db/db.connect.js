const mongoose = require('mongoose');

const initialisedatabase = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        if(connection){
            console.log("MongoDB connected successfully");
        } ;
    } catch (error) {
        console.log("Database connection failed", error);
    };
};

module.exports = { initialisedatabase };
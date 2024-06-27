const mongoose = require('mongoose');
require('dotenv').config();




const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI,{
                    //must add in order to not get any error masseges:
                    useNewUrlParser: true,
                    useUnifiedTopology:true,
        });
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error while connecting to the MongoDB,error:", error.message);
	}
};
module.exports = connectToMongoDB;
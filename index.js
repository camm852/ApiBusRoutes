import express from 'express';
import dotenv from 'dotenv';
import connectionDB from './src/config/db.js';
import busRoutes from './src/routes/busRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import cors from 'cors';
import morgan from "morgan"

//express
const app = express();

//Enviroment variables
dotenv.config();



//Config cors
const whiteList = [process.env.FRONTED_URL];

//cors dinamic
const corsOptions = {
	origin: function (origin, callback) {
		console.log(origin)
		if (whiteList.includes(origin)) {
			//origin is domain from client
			//can request APi
			callback(null, true);
		} else {
			//cannot request
			callback(new Error('Error Cors'));
		}
	},
};
app.use(cors());
app.use(morgan('tiny'));

app.use(express.json()); //process json from client

//BD
connectionDB();

app.use('/api/routes', busRoutes); //use support all verbos(get, post, delete, put)
app.use('/api/auth', authRoutes); //use support all verbos(get, post, delete, put)



const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
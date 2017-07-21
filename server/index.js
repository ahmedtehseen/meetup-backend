import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middleware';
import { MeetupRoutes } from './modules';

const app = express();

// database
dbConfig();

// middleware
middlewaresConfig(app);

app.use('/api', [MeetupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
	if (err) {
		console.log(err);
	} {
		console.log(`App listen to port: ${PORT}`);
	}
})
import express from 'express';
import { router as userApi } from './routes/user.route';

//definizione variabili
const app = express();
const PORT = 3000;

//apertura server
app.get('/', (req, res) => res.status(200).json({ message: 'SERVER ONLINE' }));

//collegamento alle routes
app.use('/users/', userApi);

//creiamo il collegamento al server
app.listen(PORT, () =>
	console.log(`server is online at http://localhost:${PORT}`)
);

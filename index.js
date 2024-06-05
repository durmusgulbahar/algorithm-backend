import express from 'express';
import cors from 'cors';
import algorithmRoutes from './routes/api.js';

const app = express();



app.use(cors())
app.use(express.json());
 
app.use('/', algorithmRoutes);

const port = parseInt(process.env.PORT) || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

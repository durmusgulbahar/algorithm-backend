import express from 'express';
import cors from 'cors';
import algorithmRoutes from './routes/api.js';

const app = express();

// Configure CORS
const allowedOrigins = ['https://akdualgoritma.com'];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
};
app.use(cors({ origin: 'https://akdualgoritma.com' }));
app.use(cors(corsOptions));
app.use(express.json());

app.use('/', algorithmRoutes);

const port = parseInt(process.env.PORT) || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

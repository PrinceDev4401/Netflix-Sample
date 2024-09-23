import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';

const app = express();

//Get the directory name for the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Serve static file from the public folder
app.use(express.static(path.join(__dirname, 'public')));

//Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views'); // This is optional if your views folder is in the root

//Use routes
app.use('/', indexRoutes);

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
import express from 'express';
import path from 'path';
import { fileURLToPath} from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(_dirname, '../public')));

app.listen(3000, () =>{
    console.log('Servidor en http://localhost:3000');
});
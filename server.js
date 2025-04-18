import express from "express";
import bodyParser   from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/script', express.static(path.join(__dirname, 'script')));
app.use('/data', express.static(path.join(__dirname, 'data')));
app.use('/images-and-icons', express.static(path.join(__dirname, 'images-and-icons')));

const port = 5500;



app.get("/", (req, res) => {
    res.render("main.ejs");
  });



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


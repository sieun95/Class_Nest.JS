import * as express from "express";
import { Router } from "express";

class Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }
}

const app: express.Express = express()
const port: number = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!')
});

app.get('/cats', (req, res) => {
    
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
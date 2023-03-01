import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "../../swagger.js";

class DocRoute {
    public router: Router;
    public url: string;
  
    constructor() {
      this.router = Router();
      this.url = "/doc";
      this.initialize();
    }
  
    private initialize() {
      this.router.use(this.url, swaggerUi.serve);
      this.router.get(this.url, swaggerUi.setup(swaggerDocument));
    }
  }
  
  export default DocRoute;
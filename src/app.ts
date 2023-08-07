import express from 'express'
import { connect } from './infra/database'


class App {
  public app: express.Application
  constructor(){
    this.app = express();
    this.middlewaresInitialize();
    this.initiliazeRoutes();
    this.interceptionError();
    connect()
  }
  initiliazeRoutes(){

  }
  interceptionError(){

  }
  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  listen() {
    this.app.listen(3333, () => console.log('Server is running!'))
  }
}
export { App }
import Server from './server/server';
import router from './router/routes';

const server=Server.init(3000);

server.app.use(router);

server.start();
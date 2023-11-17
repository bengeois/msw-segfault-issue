import { http } from 'msw';
import { SetupServer, setupServer } from 'msw/node';

const server: SetupServer = setupServer();
export { http, server };

import { Router } from 'express';

import urlRouter from '@modules/url/infra/http/routes/url.routes';

const routes = Router();

routes.use('/', urlRouter);

export default routes;

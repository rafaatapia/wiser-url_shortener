import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';

import UrlController from '../controllers/UrlController';

const urlRouter = Router();
const urlController = new UrlController();

urlRouter.get('/:hash', urlController.redirect);
urlRouter.post(
  '/short',
  celebrate({
    [Segments.BODY]: {
      url: Joi.string().required(),
    },
  }),
  urlController.create,
);

export default urlRouter;

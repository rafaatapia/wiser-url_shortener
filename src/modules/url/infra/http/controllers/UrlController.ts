import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUrlService from '@modules/url/services/CreateUrlService';
import { classToClass } from 'class-transformer';
import FindUrlHashService from '@modules/url/services/FindUrlHashService';

class UrlController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { url } = request.body;

    const createUrl = container.resolve(CreateUrlService);

    const short_url = await createUrl.execute({ url });

    return response.status(201).json(classToClass(short_url));
  }

  public async redirect(request: Request, response: Response): Promise<void> {
    const { hash } = request.params;

    const findByHash = container.resolve(FindUrlHashService);

    const url = await findByHash.execute({ hash });

    return response.redirect(url.original_url);
  }
}

export default UrlController;

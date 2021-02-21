import { injectable, inject } from 'tsyringe';
import { isAfter } from 'date-fns';
import AppError from '@shared/errors/AppError';

import Url from '../infra/typeorm/entities/Url';
import IUrlRepository from '../repositories/IUrlRepository';

interface IRequest {
  hash: string;
}

@injectable()
class FindUrlHashService {
  constructor(
    @inject('UrlRepository')
    private urlRepository: IUrlRepository,
  ) {}

  public async execute({ hash }: IRequest): Promise<Url> {
    const findUrl = await this.urlRepository.findByHash(hash);

    if (!findUrl) {
      throw new AppError('URL not found', 404);
    }

    const isExpired = isAfter(new Date(), findUrl.expires_at);

    if (isExpired) {
      throw new AppError('URL is already expired', 404);
    }

    return findUrl;
  }
}
export default FindUrlHashService;

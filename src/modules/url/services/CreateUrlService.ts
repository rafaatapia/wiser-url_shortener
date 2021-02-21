import { inject, injectable } from 'tsyringe';

import Url from '../infra/typeorm/entities/Url';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUrlRepository from '../repositories/IUrlRepository';

interface IRequest {
  url: string;
}

@injectable()
class CreateUrlService {
  constructor(
    @inject('UrlRepository')
    private urlRepository: IUrlRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ url }: IRequest): Promise<Url> {
    const url_hash = this.hashProvider.generateHash();

    const expires_at = new Date();
    expires_at.setDate(expires_at.getDate() + 1);

    const short_url = await this.urlRepository.create({
      expires_at,
      original_url: url,
      url_hash,
    });

    return short_url;
  }
}

export default CreateUrlService;

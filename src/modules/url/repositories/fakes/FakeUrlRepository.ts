import { v4 as uuid } from 'uuid';

import ICreateUrlDTO from '@modules/url/dtos/ICreateUrlDTO';
import IUrlRepository from '../IUrlRepository';
import Url from '../../infra/typeorm/entities/Url';

class UrlRepository implements IUrlRepository {
  private urls: Url[] = [];

  public async findByHash(hash: string): Promise<Url | undefined> {
    const url = this.urls.find(currentUrl => currentUrl.url_hash === hash);
    return url;
  }

  public async create({
    expires_at,
    original_url,
    url_hash,
  }: ICreateUrlDTO): Promise<Url> {
    const shortUrl = new Url();

    Object.assign(shortUrl, { id: uuid(), expires_at, url_hash, original_url });

    this.urls.push(shortUrl);

    return shortUrl;
  }
}

export default UrlRepository;

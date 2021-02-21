import { getRepository, MoreThan, Repository } from 'typeorm';

import IUrlRepository from '@modules/url/repositories/IUrlRepository';
import ICreateUrlDTO from '@modules/url/dtos/ICreateUrlDTO';
import Url from '../entities/Url';

class UrlRepository implements IUrlRepository {
  private ormRepository: Repository<Url>;

  constructor() {
    this.ormRepository = getRepository(Url);
  }

  public async findAll(): Promise<Url[] | undefined> {
    return this.ormRepository.find({
      where: { expires_at: MoreThan(new Date()) },
    });
  }

  public async findByHash(hash: string): Promise<Url | undefined> {
    return this.ormRepository.findOne({ where: { url_hash: hash } });
  }

  public async create(data: ICreateUrlDTO): Promise<Url> {
    const url = this.ormRepository.create(data);

    await this.ormRepository.save(url);

    return url;
  }
}

export default UrlRepository;

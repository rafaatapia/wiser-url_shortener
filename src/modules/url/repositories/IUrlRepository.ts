import ICreateUrlDTO from '../dtos/ICreateUrlDTO';
import Url from '../infra/typeorm/entities/Url';

export default interface IUrlRepository {
  findByHash(hash: string): Promise<Url | undefined>;
  create(data: ICreateUrlDTO): Promise<Url>;
}

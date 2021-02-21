import { container } from 'tsyringe';

import './providers';

import IUrlRepository from './repositories/IUrlRepository';
import UrlRepository from './infra/typeorm/repositories/UrlRepository';

container.registerSingleton<IUrlRepository>('UrlRepository', UrlRepository);

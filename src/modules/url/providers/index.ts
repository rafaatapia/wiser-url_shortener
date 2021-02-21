import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import NanoIdHashProvider from './HashProvider/implementations/NanoIdHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', NanoIdHashProvider);

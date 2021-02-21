import { customAlphabet } from 'nanoid';
import IHashProvider from '../models/IHashProvider';

const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

class NanoIdHashProvider implements IHashProvider {
  public generateHash(): string {
    const generator = customAlphabet(alphabet, 10);
    return generator();
  }
}

export default NanoIdHashProvider;

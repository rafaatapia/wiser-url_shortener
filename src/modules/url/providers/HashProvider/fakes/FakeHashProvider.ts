import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public generateHash(): string {
    return (
      Math.random().toString(36).substring(2, 5) +
      Math.random().toString(36).substring(2, 9)
    );
  }
}

export default FakeHashProvider;

import 'reflect-metadata';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUrlRepository from '../repositories/fakes/FakeUrlRepository';
import CreateUrlService from './CreateUrlService';

let fakeUrlRepository: FakeUrlRepository;
let fakeHashProvider: FakeHashProvider;
let createUrl: CreateUrlService;

describe('CreateURL', () => {
  beforeEach(() => {
    fakeUrlRepository = new FakeUrlRepository();
    fakeHashProvider = new FakeHashProvider();

    createUrl = new CreateUrlService(fakeUrlRepository, fakeHashProvider);
  });

  it('should be able to create a new short URL', async () => {
    const url = 'https://google.com';
    const short_url = await createUrl.execute({ url });

    expect(short_url).toHaveProperty('url_hash');
    expect(short_url.original_url).toEqual(url);
  });
});

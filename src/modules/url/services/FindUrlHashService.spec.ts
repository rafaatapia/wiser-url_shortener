import 'reflect-metadata';

import AppError from '@shared/errors/AppError';
import FakeUrlRepository from '../repositories/fakes/FakeUrlRepository';
import FindUrlHashService from './FindUrlHashService';

let fakeUrlRepository: FakeUrlRepository;
let findUrlHash: FindUrlHashService;

describe('Find URL Hash', () => {
  beforeEach(() => {
    fakeUrlRepository = new FakeUrlRepository();

    findUrlHash = new FindUrlHashService(fakeUrlRepository);
  });

  it('should be able to find a URL by it hash', async () => {
    const expiration_date = new Date();
    expiration_date.setDate(expiration_date.getDate() + 1);

    const hash = 'abc123';

    const short_url = await fakeUrlRepository.create({
      original_url: 'google.com',
      url_hash: hash,
      expires_at: expiration_date,
    });

    const findUrl = await findUrlHash.execute({ hash });

    expect(findUrl.url_hash).toEqual(hash);
    expect(findUrl.original_url).toEqual(short_url.original_url);
  });

  it('should not be able to find a URL that not exists', async () => {
    await expect(
      findUrlHash.execute({ hash: '123fake' }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to find a URL that is already expired', async () => {
    const expire_date = new Date();
    expire_date.setDate(expire_date.getDate() - 100);

    const expiredUrl = await fakeUrlRepository.create({
      expires_at: expire_date,
      original_url: 'google.com',
      url_hash: '123abc',
    });

    await expect(
      findUrlHash.execute({ hash: expiredUrl.url_hash }),
    ).rejects.toBeInstanceOf(AppError);
  });
});


import { uploadFileToArweave, MAX_UPLOAD_BYTES } from './uploads';
import superagent from 'superagent';
import { MAX_UPLOAD_ERROR_MSG } from './constants';

jest.mock('superagent', () => ({
  post: jest.fn().mockReturnThis(),
  set: jest.fn().mockReturnThis(),
  attach: jest.fn().mockReturnThis(),
}));

describe('upload tests', () => {
  beforeAll(() => {
    //jest.spyOn(console, 'error').mockImplementation(() => null);
    jest.spyOn(console, 'warn').mockImplementation(() => null);

  });
  test('uploads to arweave service', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    (superagent.attach as jest.Mock).mockResolvedValueOnce({
      body: {
        id: 'new-upload-hash',
      },
    });
    const upload = await uploadFileToArweave(Buffer.from('{"word":"up"}'), 'test.json');
    expect(upload.id).toBeDefined();
  });

  test('should fail with anon header', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    (superagent.attach as jest.Mock).mockRejectedValueOnce({
      code: 403,
    });
    await expect(uploadFileToArweave(Buffer.from('{"word":"up"}'), 'test.json'))
      .rejects
      .toThrow();
  });

  test('throws with big file', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    (superagent.attach as jest.Mock).mockResolvedValueOnce({
      body: {
        id: 'new-upload-hash',
      },
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    const bigBuffer = Buffer.from(new Array(MAX_UPLOAD_BYTES + 100).fill(0).map(() => 'a'));
    await expect(uploadFileToArweave(bigBuffer, 'test.json'))
      .rejects
      .toThrow(MAX_UPLOAD_ERROR_MSG);
  });
});
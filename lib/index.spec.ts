import { ApiUtilsService } from '.';
import { http, server } from '../test/config/server';

const apiUtilsService = new ApiUtilsService();

describe('test makeFetchCall', () => {
  it('should throw error if there is a 4XX problem ', async () => {
    server.use(
      http.post('*/test', () => {
        return new Response(null, { status: 400 });
      })
    );
    try {
      await apiUtilsService.makeFetchCall('http://www.test.fr/test', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          test: 'test',
        }),
      });
    } catch (error: any) {
      expect(error.response.statusCode).toBe(400);
    }
  });
});

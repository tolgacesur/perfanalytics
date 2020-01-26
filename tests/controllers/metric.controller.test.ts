import app from '../setup-tests';
import request from "supertest";

beforeAll(async () => {
    app.listen();
});

afterAll(async () => {
    app.server.close();
});

it('Should save metrics to database', async done => {
    await request(app.server).post('/api/metrics')
        .send({
            token: 'test',
            metrics: {},
            url : 'test.com'
        })
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
    done()
});

describe('Should return list of metrics', () => {
    it('Should return list of metrics', async done => {
        await request(app.server).get('/api/metrics/test')
            .expect(200)
        done()
    });
    
    it('Should return 422 status code if end exist but start is null', async done => {
        await request(app.server).get('/api/metrics/test?end=1111')
            .expect(422)
        done()
    });
    
    it('Should return 422 status code if start exist but end is null', async done => {
        await request(app.server).get('/api/metrics/test?start=1111')
            .expect(422)
        done()
    });
});
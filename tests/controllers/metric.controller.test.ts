import app from '../setup-tests';
import request from "supertest";

beforeAll(async () => {
    app.listen();
});

afterEach(async () => {
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

    // tobefixed : Read database
});


it('Should return list of metrics', async done => {
    await request(app.server).get('/api/metrics/test')
        .expect(200)
    done()
});


import app from '../setup-tests';
import request from "supertest";

beforeAll(async () => {
    app.listen();
});

afterEach(async () => {
    app.server.close();
});

it('Should return', async done => {
    await request(app.server).get('/')
        .expect(200)
    done()
});
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able create a new Ong', async () => {
        const response = await request(app)
        .post('/ongs')
        //.set('Authorization', 'id valido')
        .send({
            name: "APAD",
            email: "contato@contato.com",
            whatsapp: "1100000000",
            city:"Rio do Sul",
            uf: "SC"
        })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    })
})
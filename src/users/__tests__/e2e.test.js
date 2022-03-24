import request from "supertest"
import app from '../../'
describe('user tests', () => {
    describe('test signup', () => {
        let user, res;
        it('should signup unique user', async() => {
            res = await request(app)
            .post('./users')
            .send({name:"Angelus1234",
            email:"Angelus1234@gmail.com",
            phone:"0785126627",
            password:"Angel123",
            role:"Admin",
            confirmpassword:"Angel123"
           })
            expect(res.message).toContain('successfully created')
            
        })
    })
})
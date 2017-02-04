process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
let timeZone = require('../models/timeZone')

chai.use(chaiHttp);



describe('TimeZone', () => {
    beforeEach((done) => { 
        done(); 
    });

    describe('/POST api for adding timeZone', () => {
        it('it should work properly', (done) => {
            let timeZone = {
                name: "Test",
                timezone: "+5.50",
            }
            chai.request(server)
                .post('/api/add-time-zone')
                .send(timeZone)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('name');
                    res.body.should.have.property('time_zone');
                    done();
            });
        });

    });

});



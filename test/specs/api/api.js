const api = require("../../utils/apihelper")

const axios = require('axios');
describe('Name of the group', () => {

    it('API: GET CALL', async () => {
        const response = await api.getRequest('http://fakeapi.jsonparseronline.com/posts/1');
        console.log('info','with apihelper object');
        // console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
    });


});
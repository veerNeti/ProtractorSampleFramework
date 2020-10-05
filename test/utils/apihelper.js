var axios = require("axios");

var apiHelper = function () {

    this.GET = async function (appUrl) {
        try {

            const response = await axios({
                method: 'get',
                url: appUrl,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            return await response;

        } catch (error) {
            console.log('Failed to execute GET REQ' + url & ' Found Error as ', error);
        }
    }

    this.POST = async function (appUrl, payload) {
        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
                method: 'post',
                url: appUrl,
                body: payload,
                headers: headers,
            });

            return await response;

        } catch (error) {
            console.log('Failed to execute POST REQ' + url & ' Found Error as ', error);
        }
    }

    this.PUT = async function (appUrl, payload) {
        try {
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const response = await axios({
                method: 'put',
                url: appUrl,
                body: payload,
                headers: headers,
            });

            return await response;

        } catch (error) {
            console.log('Failed to execute PUT REQ' + url & ' Found Error as ', error);
        }
    }

    
}

module.exports = new apiHelper();


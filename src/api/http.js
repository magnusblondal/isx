const axios = require('axios');

class HttpResource {
    async get(url) {
        try {
            var res = await axios.get(url);
            return res.data;
        } catch(err) {
            console.error(err);
        }
    }

    async post(url, body) {
        try {
          var res = await axios.post(url, body);
          return res.data;
        } catch (error) {
          console.log(/*col.fg.red,*/ error);
          return;
        }
      };
}

module.exports = HttpResource;
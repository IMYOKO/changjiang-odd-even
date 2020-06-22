import ApiRequest from './index'
import config from './config'

const api = new ApiRequest();
api.axios.interceptors.request.use(
    (config) => {
        // if (userClient.token) {
        //     config.headers.common['utoken'] = userClient.token;
        // }
        const { url, params = {} } = config;
        if (url) {
            let matchArrs = url.match(/(:[^{:&/|_}]*)/g);
            if (Array.isArray(matchArrs) && matchArrs.length > 0) {
                matchArrs.forEach((matchKey) => {
                    const key = matchKey.replace(':', '');
                    if (key.length >= 1) {
                        if (key in params) {
                            config.url = url.replace(matchKey, params[key]);
                            delete config.params[key];
                        }
                    }
                });
            }
        }
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.axios.interceptors.response.use(
    (data) => {
        return Promise.resolve(data);
    },
    (error) => {
        console.log({ error });
        return Promise.reject(error);
    }
);

const apis = api.apis(config);
export default apis;
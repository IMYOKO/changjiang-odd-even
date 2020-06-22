import axios from 'axios'

class ApiRequest {
    /**
     * axios 实例
     * @type {AxiosInstance}
     */
    axios;

    /**
     * 构造函数
     */
    constructor() {
        this.axios = axios.create({
            timeout: 30000,
            transformRequest: [
                (data) => {
                    return JSON.stringify(data);
                }
            ],
            transformResponse: [
                (data) => {
                    return JSON.parse(data);
                }
            ]
        });
        this.interceptors();
    }

    /**
     * 默认拦截器
     */
    interceptors() {
        // 请求拦截器
        this.axios.interceptors.request.use(
            (config) => {
                config.headers['Content-Type'] =
                    'application/json;charset=UTF-8';
                return Promise.resolve(config);
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // 响应拦截器
        this.axios.interceptors.response.use(
            (response) => {
                const { status, data } = response;
                if (status === 200 && data.Code === 200) {
                    return Promise.resolve(data.Data);
                }
                return Promise.reject(data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    /**
     * 使用配置生成接口
     */
    apis(config) {
        const that = this;
        const apiKeys = Object.keys(config);
        const apis = {};
        apiKeys.forEach((key) => {
            const cfg = config[key].split(' ');
            let [url, method = 'GET'] = cfg;
            method = method.toLowerCase();
            Object.defineProperty(apis, key, {
                value(...args) {
                    const mt = method.toUpperCase();
                    if (mt === 'GET') {
                        return that.axios.get(url, ...args);
                    }
                    if (mt === 'POST') {
                        return that.axios.post(url, ...args);
                    }
                    if (mt === 'PUT') {
                        return that.axios.put(url, ...args);
                    }
                    if (mt === 'PATCH') {
                        return that.axios.patch(url, ...args);
                    }
                    if (mt === 'DELETE') {
                        return that.axios.delete(url, ...args);
                    }
                    const cfg = {
                        url,
                        method: method,
                        ...args
                    };
                    return that.axios(cfg);
                }
            });
        });
        return apis;
    }
}

export default ApiRequest;
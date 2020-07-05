import ApiRequest from './request'
import { baseURL } from './config'
import store from '@/store/index'

const apiRequest = new ApiRequest();

apiRequest.axios.interceptors.request.use(
    (config) => {
        store.commit('Common/updateLoading', true, { root: true })
        return Promise.resolve(config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiRequest.axios.interceptors.response.use(
    (data) => {
        store.commit('Common/updateLoading', false, { root: true })
        return Promise.resolve(data);
    },
    (error) => {
        console.log(error)
        store.commit('Common/updateLoading', false, { root: true })
        return Promise.reject(error);
    }
);

/** 
 * 登录
*/
const login = (data) => {
    return apiRequest.post(`${baseURL}/AppLogin`, data);
}

/** 
 * 注册
*/
const register = (data) => {
    return apiRequest.post(`${baseURL}/Register`, data);
}

/** 
 * 获取验证码
*/
const getSMS = (data) => {
    return apiRequest.post(`${baseURL}/GetSMS`, data);
}

/** 
 * 个人信息
*/
const withdrawal = () => {
    return apiRequest.post(`${baseURL}/Withdrawal`);
}

/** 
 * 获取视频列表
*/
const getVideo = () => {
    return apiRequest.post(`${baseURL}/GetVedio`, { responseType: 'arraybuffer' });
}

export default {
    login,
    register,
    getSMS,
    withdrawal,
    getVideo
}
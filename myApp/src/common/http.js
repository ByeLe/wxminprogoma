
import Taro from '@tarojs/taro';
const domain = 'http://localhost:8081';
export const get = (url, params = {}, headers = {}) => {
    const keys = Object.keys(params);
    let queryStr = '';
    keys.forEach((item) => {
        queryStr += `${item}=${params[item]}&`;
    });
    if (queryStr.length !== 0) {
        queryStr.slice(0, queryStr.length - 1);
        url += `?${queryStr}`
    };
    return new Promise((resolve, reject) => {
        Taro.request({
            url: `${domain}${url}`,
            method: 'GET',
            success: (res) => {
                console.log(res);
                resolve(res.data);
            },
        });
    });
    
}
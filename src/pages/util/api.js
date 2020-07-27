const BASE_URL = "http://localhost:8082"
export const myRequest = (options) => {
    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + options.url,
            data: options.data,
            method: options.method,
            success: result => {
                if (result.data.status != 0) {
                    return uni.showToast({
                        title: "数据获取失败！"
                    })
                }
                resolve(result)
            }, fail: result => {
                uni.showToast({
                    title: "接口请求失败！"
                })
                reject(result)
            }
        })
    })
}
export const log = (object) => {
    var flag = true;
    if (flag) {
        return console.log(object)
    }
}
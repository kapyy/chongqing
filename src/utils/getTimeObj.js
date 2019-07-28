/*
入参 是一个 13位的, 以ms 为单位的 时间戳;
如果参数为空, 则使用当前时间
*/
let getTimeObj = (timestamp_ms) => {
    if (!timestamp_ms) {
        throw new Error('Error: getTimeObj func error, timestamp_ms 错误', timestamp_ms)
    }
    let date = new Date(timestamp_ms);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let week = date.getDay();
    let add0 = (value) => {
        return (value < 10 ? `0${value}` : value)
    }
    return {
        year,
        month: add0(month),
        day: add0(day),
        hour: add0(hour),
        min: add0(min),
        second: add0(second),
        week
    }
}
export default getTimeObj;
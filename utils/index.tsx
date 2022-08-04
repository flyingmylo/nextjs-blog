export const deepCopy = (obj: object) => {
  let temp = Array.isArray(obj) ? [] : {}

  Object.entries(obj).forEach(([key, value]) => {
    if (isObject(value)) {
      temp[key] = deepCopy(value)
    } else {
      temp[key] = value
    }

  })
  return temp
}
console.log('我是分支 ----> copy-main ')
export const isObject = (obj: object) => {
  return obj && Object.prototype.toString.call(obj) === '[object Object]'
}
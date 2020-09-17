//防抖函数
export function debounce(func,delay){
  let timer = null
  return function(...arg){
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,arg)
    },delay)
  }
}

//时间格式处理函数
function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n;
}

export function formatTime (number, format) {
  let time = new Date(number)
  let newArr = []
  let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
  newArr.push(time.getFullYear())
  newArr.push(formatNumber(time.getMonth() + 1))
  newArr.push(formatNumber(time.getDate()))

  newArr.push(formatNumber(time.getHours()))
  newArr.push(formatNumber(time.getMinutes()))
  newArr.push(formatNumber(time.getSeconds()))

  for (let i in newArr) {
      format = format.replace(formatArr[i], newArr[i])
  }
  return format;
}
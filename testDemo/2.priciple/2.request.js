
// 检查状态码
function checkStatus(response) {
  if (response.code >=200 && response.code < 300) {
    return response;
  } else {
    throw new Error('响应结果不正确');
  }
}
// 检查编码
function checkCode(data) {
  if (data.code == 0) {
    return data;
  } else {
    throw new Error('响应结果不正确');
  }
}
// 响应体转JSON
function parseJSON(response) {
  return response.json();
}
function request(url, options) {
  /**
  * 1.判断响应的状态码是不是2XX
  * 2.把响应体转成JSON对象
  * 
  */
  fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkCode)
}

/* 
  * 1.对修改关闭，对扩展开放
  * 2.单一职责
  * 3.对修改关闭
 */
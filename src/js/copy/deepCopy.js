var deepCopy = function (obj) {
  if (typeof obj !== 'object') return;
  var newObj = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
};

var obj = [{key: '1', value: 'key'}, {key: '2', value: 'shell'}, {key: '3', value: 'jeremy'}, {key: '4', value: 'll'}];
console.log(deepCopy(obj));

var newObj = deepCopy(obj);
newObj.forEach((item => {
  if (item['key'] === '3') {
    item['value'] = 'cd';
  }
  return item
}));
console.log(newObj)
console.log(obj)

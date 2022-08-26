let $ = {};
$.define = function (nameSpace, fn) {
  let nameSpaces = nameSpace.split('.');
  let fnName = nameSpaces.pop();
  let current = $;
  for (let i = 0; i < nameSpaces.length; i++) {
    let nameItem = nameSpaces[i];
    if (!current[nameItem]) {
      current[nameItem] = {};
    }
    current = current[nameItem];
  }
  current[fnName] = fn;
};
$.define('dom.class.addClass', function () {
  console.log('dom.class.addClass');
})
$.dom.class.addClass('title')

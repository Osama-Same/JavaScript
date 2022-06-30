const modifiedFilter = function (items, callback) {
  let result;
  if (Array.isArray(items)) {
    result = [];
    modifiedLoop(items, function (element, key) {
      if (callback(element)) {
        result.push(element);
      }
    });
  } else {
    result = {};
    modifiedLoop(items, function (element, key) {
      if (callback(element)) {
        result[key] = element;
      }
    });
  }
  return result;
};

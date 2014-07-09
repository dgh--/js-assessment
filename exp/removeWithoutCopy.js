var a = [1, 1, 1, 1, 1, 1, 1];

var removeWithoutCopy = function(arr, item) {
  var i, len;
  for (i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === item) {
      console.info(arr);
      arr.splice(i, 1);
      i = i - 1;
      len = len - 1;
    }
  }
  return arr;
}

console.info(removeWithoutCopy(a, 1));


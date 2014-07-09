var remove = function(arr, item) {

        var ret = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] !== item) {
                ret.push(arr[i]);
                console.info(
            }
        }

      return ret;
};


var a = [0, 1, 1, 2, 3, 5];
console.info(remove(a, 1));

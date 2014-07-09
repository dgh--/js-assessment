if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);

    },

    sum : function(arr) {
        var sum = 0;
        for (var i=0; i<arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {

        var ret = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] !== item) {
                ret.push(arr[i]);
            }
        }

      return ret;

    },

    removeWithoutCopy : function(arr, item) {
        var i, len;

        for (i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i = i - 1;
                len = len - 1;
            }
        }

      return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr1 = arr.splice(0, index);
        arr2 = arr;
        arr = arr1.concat([item], arr2);
        return arr;
    },

    count : function(arr, item) {
        var c = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                c++;
            }
        }

        return c;


    },

    duplicates : function(arr) {
        var duplicates_arr = [];
        var count = {};
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] in count) {
                count[arr[i]]++;
            } else {
                count[arr[i]] = 1;
            }
        }

        for (key in count) {
            if (count[key] > 1) {
                duplicates_arr.push(key);
            }
        }

        return duplicates_arr;
    },

    square : function(arr) {
        return arr.map(function(x) {
            return x * x;
        });
    },

    findAllOccurrences : function(arr, target) {
        var indices = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                indices.push(i);
            }
        }
        return indices;

    }
  };
});

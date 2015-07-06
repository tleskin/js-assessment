exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(arg){
      return str + ', ' + arg;
    }
  },

  makeClosures : function(arr, fn) {
    var new_arr = [];

    var makeFunction = function(input) {
      return function() {
        return fn(input);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      new_arr.push(makeFunction(arr[i]));
    }
    return new_arr;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3);
    }
  },

  useArguments : function(a, b, c, d) {
    if( a && b && c && d ){
      return a + b + c + d;
    } else if ( a && b && c ) {
      return a + b + c;
    } else if ( a && b ) {
      return a + b;
    } else {
      return a;
    }
  },

  callIt : function(fn) {
    const args = Array.prototype.slice.call(arguments, 1, arguments.length)
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};

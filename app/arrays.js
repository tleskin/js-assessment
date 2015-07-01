exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return _.reduce(arr, function(previous, next) { return previous + next }, 0);
  },

  remove : function(arr, item) {
    return _.reject(arr, function(num){ return num == item });
  },

  removeWithoutCopy : function(arr, item) {
    var new_arr = arr;

    for( i = 0 ; i < arr.length; i++ ){
      if (arr[i] == item) {
        new_arr.splice(i, 1);
        i -= 1;
      }
    }
    return new_arr;
  },

  append : function(arr, item) {
      arr[arr.length] =  item;
      return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail : function(arr) {
    arr.shift(arr[0]);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    new_arr = [];
    for(i = 0; i < arr.length; i++){
      if( i == index ){
        new_arr.push(item);
        new_arr.push(arr[i]);
      } else {
        new_arr.push(arr[i]);
      }
    }
    return new_arr;
  },

  count : function(arr, item) {
    var count = 0;
    for(i=0; i < arr.length; i++){
      if( arr[i] == item ){
        count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var items = {};
    var new_arr = [];
    for(i = 0; i < arr.length; i++){
      if(items.hasOwnProperty(arr[i].toString())){
        items[arr[i]] = (items[arr[i]] + 1);
      } else {
        items[arr[i]] = 1;
      }
    }
    for (var key in items) {
      if (items[key] > 1) {
        new_arr.push(parseInt(key));
      }
    }
    return new_arr;
  },

  square : function(arr) {
    var squared = []
    for(i = 0; i < arr.length; i++){
      squared.push(arr[i] * arr[i]);
    }
    return squared;
  },

  findAllOccurrences : function(arr, target) {
    var occurrances = [];
    for(i = 0; i < arr.length; i++){
      if( arr[i] == target ){
        occurrances.push(i);
      }
    }
    return occurrances;
  }
};

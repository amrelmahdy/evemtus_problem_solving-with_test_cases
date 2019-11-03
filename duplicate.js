module.exports = {
  getFirstDuplicate: (arr) =>{
      let firstIndex = 0;
      let isMatch = false;
      for (let a = 0; a < arr.length; a++) {
          for (let b = a+1; b < arr.length; b++) {
              if (arr[a] === arr[b]){
                  firstIndex = arr.indexOf(arr[a]);
                  isMatch=true;
                  break;
              }
          }
          if (isMatch) {break;}
      }

      return firstIndex;
  }
};


//! 1
function repeatStr (n, s) {
    let repeat = '';
    for (let i = 1; i <= n; i++){
        repeat += s;
    }
    return repeat;
  }

  console.log(repeatStr(10, 100000000000));
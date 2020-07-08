// snail = function (array) {
//     let result = array[0];
//     let n = array.length;
//     // console.log(n);
//
//     for (let c = 0, c1 =0, c2 =0; c < n - 1; ++c) {
//         // console.log("C =" +c);
//         if (!(c % 2)) {
//
//             let j = n - 1 - c1;
//             let i = c1+1;
//             for (; i < n - c1; ++i){
//                 // console.log(1);
//                 result.push(array[i][j]);
//             }
//
//             i=j--;
//             for (; j >= c1; --j){
//                 // console.log(2);
//                 result.push(array[i][j]);
//             }
//             ++c1;
//
//         } else {
//             let j = c - 1;
//             let i = n - 1 - c;
//
//             for (; i >= c; --i){
//                 // console.log(3);
//                 result.push(array[i][j]);
//             }
//
//             i = ++j;
//             for (; j < n - c; ++j){
//                 // console.log(4);
//                 result.push(array[i][j])
//             }
//             ++c2;
//
//         }
//     }
//
//     return result;
// };

snail = function(array){
  let result = array[0];
  let n = array.length;
  let start = 1;
  let circles = Math.floor(n/2);

  while(circles){
      for(let i=start;i<=n-start;++i) // to down
          result.push(array[i][n-start]);
      for(let j=n-start-1;j>=start-1;--j) // to left
          result.push(array[n-start][j]);
      for(let i=n-start-1;i>=start;--i) // to up
          result.push(array[i][start-1]);
      for(let j= start;j<n-start;++j) // to right
          result.push(array[start][j]);
      ++start;--circles;
  }

  return result;
};

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(snail([[1,2,3], [8,9,4], [7,6,5]]));
console.log(snail([[1,2,3,1], [4,5,6,4], [7,8,9,7], [7,8,9,7]]));
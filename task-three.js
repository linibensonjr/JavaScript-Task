function divisibility(range) {
    const ans = [];
       for (var i = 1;i <= range; i++){
           if (i % 2 === 0 && i % 3 === 0){
               ans.push('yu-gi');
           } else if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
               ans.push('yu-gi-oh');
           } else if (i % 2 === 0 && i % 5 === 0){
               ans.push('yu-oh');
           } else if (i % 3 === 0 && i % 5 === 0){
               ans.push('gi-oh');
           } else if (i % 2 === 0){
               ans.push('yu');
           } else if (i % 3 === 0){
               ans.push('gi');
           } else if (i % 5 === 0){
               ans.push('oh');
           } else {
               ans.push(i);
           }
       }
       console.log(ans);
  }
  
  console.log('\nNumbers from 1 - 100\n');
  divisibility(100);
  
  //My Random number
  console.log('\nNumbers from 1 - 44\n');
  divisibility(44);
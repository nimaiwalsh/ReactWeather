 // function getPromise (location) {
 //   return new Promise(function (resolve, reject) {
 //     setTimeout(function(){
 //       resolve(79);
 //       reject('City not found');
 //     }, 1000);
 //   });
 // }
 //
 // getPromise('Sydney').then(function(temp){
 //   console.log('promise success', temp);
 // }, function(err){
 //   console.log('promise failure', err);
 // });

 //Challenge area
 function addPromise(a, b) {
   return new Promise(function (resolve, reject) {
     if (typeof a === 'number' && typeof b ==='number') {
       resolve(a+b);
     } else {
       reject('No two numbers were provided');
     }
   });
 }

 addPromise(1,2).then(function(sum) {
   console.log('Promise success', sum);
 }, function(err) {
   console.log('Promise failure', err);
 });

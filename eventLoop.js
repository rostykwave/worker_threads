console.log('start');
setTimeout(() => {
  console.log('first timeout');
});

const myPromise = new Promise((resolve, reject) => {
  console.log('inside Promise');

  setTimeout(() => {
    console.log('inside Promise setTimeout');
    reject(new Error('fail'));
  }, 300);
});

myPromise
  .then(() => {
    console.log('first promise');
  })
  .then(() => {
    console.log('first promise');
  })
  .catch(err => {
    console.error(err);
  });

console.log('finish');

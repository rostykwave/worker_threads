const { Worker, BroadcastChannel } = require('worker_threads');

console.log('From index');
const worker = new Worker('./worker.js', { workerData: 5 });

const bc = new BroadcastChannel('channel1');

bc.onmessage = msg => {
  console.log('In parent: ', msg.data);
};
// worker.postMessage('Hello worker!');

// worker.on('message', msg => {
//   console.log('Message from worker:', msg);
// });

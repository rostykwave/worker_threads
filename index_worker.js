const {
  Worker,
  BroadcastChannel,
  isMainThread,
  workerData,
} = require('worker_threads');

const bc = new BroadcastChannel('channel1');

if (isMainThread) {
  console.log('From index');
  const worker = new Worker('./worker.js', { workerData: 5 });

  bc.onmessage = msg => {
    console.log('In parent: ', msg.data);
  };
} else {
  console.log('I`m am Worker', workerData);
  bc.postMessage('Worker 1 ready!');
}

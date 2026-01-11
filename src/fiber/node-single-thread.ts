console.log("main: start");

setTimeout(() => {
  console.log("timeout 1");
}, 100);

setTimeout(() => {
  console.log("timeout 2");
}, 50);

console.log("main: end");

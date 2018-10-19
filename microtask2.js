const p = Promise.resolve();
for (let i = 0; i < 100000; i++) {
  p.then(() => console.log("promise"));
}
setTimeout(() => console.log("timeout"));

requestAnimationFrame(() => console.log("RAF"));

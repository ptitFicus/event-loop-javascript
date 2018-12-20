requestAnimationFrame(() => console.log("RAF"));

const p = Promise.resolve();

const recPromise = f => p.then(() => {
  f()
  recPromise(f)
})

recPromise(() => console.log("promise"))
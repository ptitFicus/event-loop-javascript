const button = document.getElementById("button");

button.addEventListener("click", () => {
  requestAnimationFrame(() => console.log("RAF"));
  const p = Promise.resolve();
  recPromise(p, () => console.log("promise"));
});

function recPromise(p, f) {
  p.then(() => {
    f();
    recPromise(p, f);
  });
}

const button = document.getElementById("button");

button.addEventListener("click", () => {
  requestAnimationFrame(() => console.log("RAF"));

  const p = Promise.resolve();
  addThen(p, 1000000);
});

function addThen(p, remaining) {
  p.then(() => {
    for (let j = 0; j < 100000; j++) {
      (j * Math.random()) % Math.random();
    }
    if (remaining % 1000 === 0) {
      console.log("Done, remaining", remaining);
    }

    if (remaining > 0) {
      addThen(p, remaining - 1);
    }
  });
}

requestAnimationFrame(() => console.log("RAF"));

const p = Promise.resolve();

function addThen(p, remaining) {
  p.then(() => {
    console.log("promise");
    for (let j = 0; j < 10000; j++) {
      (j * Math.random()) % Math.random();
    }
    if (remaining > 0) {
      addThen(p, remaining - 1);
    }
  });
}

addThen(p, 1000);

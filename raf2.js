for (let i = 0; i < 1000; i++) {
  setTimeout(() => {
    console.log("start");
    for (let j = 0; j < 100; j++) {}
    console.log("stop");
  });
}

const recursiveRAF = f => {
  requestAnimationFrame(() => {
    f();
    myRaf(f);
  });
};

recursiveRAF(() => console.log("RAF_1"));
recursiveRAF(() => console.log("RAF_2"));

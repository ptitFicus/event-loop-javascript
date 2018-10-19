for (let i = 0; i < 1000; i++) {
  setTimeout(() => {
    console.log("start");
    for (let j = 0; j < 100; j++) {}
    console.log("stop");
  });
}
requestAnimationFrame(() => console.log("RAF"));

const button = document.getElementById("button");

button.addEventListener("click", () =>
  console.log("click <===================")
);

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    for (let j = 0; j < 100000000; j++) {
      (i * j) % Math.random();
    }
    console.log(`done ${i}`);
  }, 0);
  console.log("Done queing timeouts");
}

const button = document.getElementById("button");

button.addEventListener("click", () => {
  const p = Promise.resolve();
  for (let i = 0; i < 100000; i++) {
    // Micro tasks
    p.then(() => console.log("promise"));
  }
  // Task
  setTimeout(() => console.log("timeout"));
  // "Render task"
  requestAnimationFrame(() => console.log("RAF"));
});

setTimeout(() => console.log("task"));

Promise.resolve().then(() => console.log("microtask"));

const fs = require("fs");
const fsp = require("fs/promises");

// write file - async way using error first callback pattern
fs.writeFile("hello.txt", "Hello", "utf-8", (err) => {
  if (err) {
    console.log("Saabbir:", "error", err);
  } else {
    console.log("Saabbir:", "hello.txt file has been written with text Hello");
  }
});

// writing again to the same file will override the previous content
fs.writeFile("hello.txt", "World", "utf-8", (err) => {
  if (err) {
    console.log("Saabbir:", "error", err);
  } else {
    console.log(
      "Saabbir:",
      "hello.txt file has been overwritten with text World"
    );
  }
});

// to prevent overwriting the file, we can use the flag "a"
fs.writeFile("hello.txt", "!", { flag: "a", encoding: "utf-8" }, (err) => {
  if (err) {
    console.log("Saabbir:", "error", err);
  } else {
    console.log("Saabbir:", "! appended at the end of hello.txt file");
  }
});

// we can replace error first callback with the promise based approach using fs/promises module
fsp
  .readFile("./hello.txt", "utf-8")
  .then((fileContents) => console.log("Saabbir:", "fileContents", fileContents))
  .catch((error) => console.log("Saabbir:", "error", error));

// or using async/await
async function readFile() {
  try {
    const fileContents = await fsp.readFile("./hello.txt", "utf-8");
    console.log(
      "Saabbir:",
      "reading fileContents using async/await",
      fileContents
    );
  } catch (error) {
    console.log("Saabbir:", "error", error);
  }
}
readFile();

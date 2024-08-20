const fs = require("fs");

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf8",
  highWaterMark: 1,
});

const writableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);

  writableStream.write(chunk);
});

// we can alternatively use pipe() instead of on()

// readableStream.pipe(writableStream)

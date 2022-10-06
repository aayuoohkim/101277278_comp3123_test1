const fs = require("fs");
const path = "./logs";

const addLogs = () => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  process.chdir(path);
  for (let i = 0; i < 10; i++) {
    fs.writeFileSync(`log${i}.txt`, `LogFile number ${i}`, (err) =>
      console.log(err)
    );
  }
  const outputFiles = fs.readdirSync("./");
  outputFiles.forEach((file) => console.log(file));
};

const removeLogs = () => {
  if (fs.existsSync(path)) {
    process.chdir(path);
    const files = fs.readdirSync(process.cwd());
    files.forEach((file) => {
      fs.unlinkSync(file, (err) => console.log(err));
      console.log(`delete files ... ${file}`);
    });
  }
};

// addLogs();
removeLogs();

const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve({ message: "delayed success!" }), 500);
  });
const rejectPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject({ error: "delayed exception!" }), 500);
  });

resolvedPromise().then((message) => console.log(message));
rejectPromise().catch((message) => console.error(message));

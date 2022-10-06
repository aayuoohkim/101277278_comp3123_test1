const lowerCaseWords = (mixedArr) => {
  const promise = new Promise((resolve, reject) => {
    if (!mixedArr || mixedArr.length === 0 || !Array.isArray(mixedArr)) {
      reject("Invalid Array");
    } else {
      const onlyStrArr = mixedArr.filter(
        (element) => typeof element === "string"
      );
      const lowerCaseStrArr = onlyStrArr.map((element) =>
        element.toLowerCase()
      );
      resolve(lowerCaseStrArr);
    }
  });
  return promise;
};

const mixedArr = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArr)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

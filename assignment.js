function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a number!";
  }

  const cube = number ** 3;

  return cube;
}

let result = cubeNumber(4);

console.log(result);

// 2 ----------------
// 2 ----------------
// 2 ----------------

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please provide a string!";
  } else if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

console.log(matchFinder("Peter Parker", "Pet"));

// 3 ----------------
// 3 ----------------
// 3 ----------------

function sortMaker(arr) {
  let firstNumber = arr[0];
  let secondNumber = arr[1];

  if (firstNumber < 0 || secondNumber < 0) {
    return "Invalid Input";
  } else if (firstNumber === secondNumber) {
    return "equal";
  } else {
    if (firstNumber < secondNumber) {
      return ([firstNumber, secondNumber] = [secondNumber, firstNumber]);
    } else {
      return arr;
    }
  }
}

console.log(sortMaker([0, 1]));

// 4 ----------------
// 4 ----------------
// 4 ----------------

function findAddress(obj) {
  if (typeof obj !== "object") {
    return "please provide a valid object";
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return street + "," + house + "," + society;
  }
}

let result2 = findAddress({
  street: 10,
  society: "Earth Perfect",
});

console.log(result2);

// 5 ----------------
// 5 ----------------
// 5 ----------------

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "please provide a valid array this array is empty ";
  }

  let totalTaka = 0;

  for (let x of changeArray) {
    totalTaka += x;
  }

  if (totalTaka >= totalDue) {
    return true;
  } else {
    return false;
  }
}

console.log(canPay([1, 2, 5], 10));

// Part 2

/**

SQL

1)
SELECT p."name", SUM(i.price :: INTEGER * t."total") as total_price from Persons p
JOIN  Transactions t on t.person_id = p.id
JOIN  Items i on t.item_id = i.id
GROUP BY p."name"; 

2)
SELECT p."name", i."name" as "Item", sum(i.price :: INTEGER * t.total) as total_price FROM Persons p
JOIN Transactions t ON t.person_id = p.id 
JOIN Items i ON t.item_id = i.id
WHERE t."date" BETWEEN '2020-01-1' AND '2020-01-25'
GROUP BY p."name", i."name";

3)
SELECT p."name" FROM Persons p
JOIN Transactions t ON t.person_id = p.id 
JOIN Items i ON t.item_id = i.id
ORDER BY t.total DESC;

 */

// NodeJS
const getShape = (int) => {
  if (int % 2 === 0) return "CIRCLE";
  else if (int % 3 === 0) return "STAR";
  else if (int % 3 === 0 && int % 2 === 0) return "CIRCLE STAR";
  else return null;
};

const option1 = 5;
const option2 = 6;
const option3 = 9;

console.log(getShape(option1));

// Javascript
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./dataBefore.json"));

const result = {
  h: Object.keys(data[0]),
  d: [],
};

data.forEach((el) => {
  result.d.push([el.username, el.hair_color, el.height]);
});

fs.writeFileSync("./dataAfter.json", JSON.stringify(result, null, 2));

// Algorithmic
function index(arr) {
  let result = [];
  if (arr.length != 1) {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }
  }
  console.log(result);
}

function find(arr, i, n) {
  if (n == 0) index(arr);
  for (let j = i; j <= n; j++) {
    arr.push(j);
    find(arr, j, n - j);
    arr.pop();
  }
}

const n = 4;
const arr = [];
console.log(find(arr, 1, n));

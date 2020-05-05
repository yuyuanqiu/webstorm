const path = require("path");
const fs = require("fs");
const readline = require("readline");

const {
  once
} = require('events');
const {
  createReadStream
} = require('fs');
const {
  createInterface
} = require('readline');

const express = require('express')
const router = express.Router()

let arr = [];

async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream("Q:\\notebook\\100-日思录\\0-我的日常\\0-日思录 - 副本.txt.md"),
      crlfDelay: Infinity
    });
    
    rl.on('line', (line) => {
      console.log(line)
      arr.push(line)
    });

    await once(rl, 'close');
    

    console.log('文件已处理');
  } catch (err) {
    console.error(err);
  }
}

processLineByLine();
console.log(arr);


// const newList = [];
// fs.readFile('Q:\\notebook\\100-日思录\\0-我的日常\\0-日思录 - 副本.txt.md', 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data)


//     for (let i = 0; i < data.length; i++) {
//         let result = {};
//         let value = data[i].properties;
//         result.ID = i + 1;
//         result.TYPE = value.FLAG_A;
//         result.X = value.X;
//         result.Y = value.Y;
//         newList.push(result);
//     }

//     let newContent = JSON.stringify(newList, null, 4);
//     fs.writeFile('result.json', newContent, 'utf8', (err) => {
//         if (err) throw err;
//         console.log('success done');
//     });
// });
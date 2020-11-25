// const { lstat } = require("fs");
// const { v4 } = require("uuid");
// const { randomColor: color } = require("randomcolor");

// console.logv4())(
// console.log(color())

const randomH1 = (uuid, textColor, backColor) => {
    let secretMsg = `<h1 style="color:${textColor}; background-color:${backColor}">Hello there, your uuid is ${uuid}</h1>`
    return secretMsg;
}

// console.log(color());

module.exports = randomH1;
const fs = require("fs");

let visitLog = JSON.parse(fs.readFileSync("./visitLog.json", "utf8"))

const visitLogger = (address) => {
    console.log("visit logged")

    let newVisit = {
        address: address,
        time: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    visitLog = [...visitLog.filter(visit => visit.address !== address), newVisit]


    fs.writeFile(
        "/visitLog.json",
        JSON.stringify(visitLog),
        "utf8",
        (err) => {
            if (err) throw (err);
            console.log("session has been logged")
        }
    )
}


module.exports = visitLogger;
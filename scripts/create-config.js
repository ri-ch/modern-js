const { version } = require("../package.json")
const fs = require("fs")

fs.writeFileSync("dist/config.json", JSON.stringify({ version }))
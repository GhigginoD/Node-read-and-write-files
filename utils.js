const filehandle = require("fs").promises;

exports.createFile = (path, json) => {
    return filehandle.writeFile(path, json, {flags: "w", encoding: "utf8"});
};
exports.readFile = (path) => {
    return filehandle.readFile(path, "utf8");
};

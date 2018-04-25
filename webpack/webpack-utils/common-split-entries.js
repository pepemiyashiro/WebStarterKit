const { lstatSync, readdirSync } = require('fs')
const path = require('path');
const glob = require('glob');

const splitEntriesFolder = path.resolve(__dirname, "../../", "src", "cms-components", "split-entries");
const fileExtention = '.js';
/**
 * detects if directory exist
 * @param {String} targetFolder
 */
function isDirectory(targetFolder) {
    return lstatSync(targetFolder).isDirectory();
}

/**
 * list all split entries folder names
 * @param {String} jsFilesPath
 */
function getEntriesFolderNames(jsFilesPath) {
    return readdirSync(jsFilesPath)
            .map(name => path.join(jsFilesPath, name))
            .filter(isDirectory)
            .map( folderName => path.basename(folderName) );
}

function getFilesPath(targetFolder) {
    return glob.sync(`${targetFolder}/**/*${fileExtention}`)
}

function setEntryConfig(targetFolder) {
    const entriesObj = {};
    getFilesPath(targetFolder)
            .map(file => entriesObj[`${path.basename(file, fileExtention)}`] = file )
    return entriesObj;
}

module.exports = {
    entryConfig: setEntryConfig(splitEntriesFolder)
}

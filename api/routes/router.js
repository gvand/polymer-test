const fs = require('fs');
const path = require('path');
const express = require('express');

const routes = function () {
    let startFolder = null;
    const load = (app, folderName, logger) => {
        if (!startFolder) startFolder = path.basename(folderName);
        fs.readdirSync(folderName).forEach(file => {
            const fullName = path.join(folderName, file);
            const stat = fs.lstatSync(fullName);
            if (stat.isDirectory()) {
                load(app, fullName, logger);
            } else if (file.toLowerCase().indexOf('.js')) {
                let dirs = path.dirname(fullName).split(path.sep);
                if (dirs[0].toLowerCase() === startFolder.toLowerCase()) {
                    dirs.splice(0, 1);
                }
                const router = express.Router();
                const baseRoute = '/' + dirs.join('/');
                logger.info('Created route: ' + baseRoute + ' for ' + fullName);
                require('../' + fullName)(router, logger);
                app.use(baseRoute, router);
            }
        });
    };
    return {
        load: load
    }
}();
module.exports = routes;
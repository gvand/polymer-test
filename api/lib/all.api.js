const utils = require('./utils');

module.exports = (db, logger) => {
    
    const get = (req,res) => {
        const {id} = req;
        try {
            res.status(200).send(id.toString());
        } catch(err){
            logger.error(`${err.name}, ${err.message}`);
            res.status(500).send(`${err.name}, ${err.message}`);
        }
    };

    const middleware = (req, res, next) => {
        next();
    };

    const param = (req, res, next, id) => {
        if(utils.isNumber(id)){
            req.id = parseInt(id);
            next();
        } else {
            next(utils.getError(400, 'Only numbers as id are allowed'));
        }
    };

    return {
        get:get,
        param:param,
        middleware:middleware
    };
};
const utils = require('./utils');

module.exports = (db, logger) => {
    
    const get = (req,res) => {
        const {test} = req;
        try {
            // const result = ReactApp({
            //     make_model: make_model,
            //     rows: rows,
            //     variant: variant
            // });
            // const template = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
            // res.status(200).render(template,{
            //     app: result.app,
            //     jss: result.jss,
            //     make_model: JSON.stringify(make_model),
            //     rows: JSON.stringify(rows),
            //     variant: JSON.stringify(variant)
            // });
            res.status(200).send(test);
        } catch(err){
            logger.error(`${err.name}, ${err.message}`);
            res.status(500).send(`${err.name}, ${err.message}`);
        }
    };

    const middleware = (req, res, next) => {
        req.test = "hello world";
        next();
        // db.rows(req.id, req.query).then(result => {
        //     req.rows = map.rows(result);
        //     return db.variant(req.rows[0].id);
        // }).then(result => {
        //     req.variant = map.variant(result[0]);
        //     return db.make_model(req.id);
        // }).then(result => {
        //     const {make_label, make_id, model_label, model_id} = result[0];
        //     req.make_model = {
        //         make: {
        //             id: make_id,
        //             label: make_label
        //         },
        //         model: {
        //             id: model_id,
        //             label: model_label
        //         }
        //     };
        //     next();
        // }).catch((err) => {
        //     next(err);
        // })
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
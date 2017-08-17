const mcache = require('memory-cache');

const cache = (duration) => {
  return (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url;
    const cachedBody = mcache.get(key);
    if (cachedBody) {
      return res.send(cachedBody);
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        if (res.statusCode != 200) return res.sendResponse(body);
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  }
};

module.exports = (router, logger) => {
    const all = require('../../lib/all.api')(logger);
    router.param('id', all.param);
    if (process.env.NODE_ENV === 'development') {
        router.use('/:id', all.middleware);
    } else {
        router.use('/:id', cache(86400), all.middleware);
    }
    router.route('/:id').get(all.get);
};
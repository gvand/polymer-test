const winston = require('winston');

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: function() {
                return new Date();
            },
            formatter: function(options) {
                // Return string will be passed to logger.
                // 2016-12-13 13:02:03,837 [INFO] from EventStream in blocking-io-thread-1 - Event: metric, Stack: local, Version: 121, Host: admins-mbp-8.as24.local, Timestamp: 2016-12-13T12:02:03.836Z, CorrelationId: None, Metric(cms.get_content_by_path.response_time,1,Percentiles(388,388,388,388,388,388,388,388,388,388),Rates(0.16929634497812282,0.1934432200964012,0.19779007785878447,0.05203327782413889))

                return options.timestamp().toISOString() +' ['+ options.level.toUpperCase() +'] - '+ (options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            }
        })
    ]
});

module.exports = logger;
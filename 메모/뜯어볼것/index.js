const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

sub.on('message', (channel, message) => {
    console.log(`Received data: ${message}`);
});

sub.subscribe('test5');
sub.subscribe('test6');

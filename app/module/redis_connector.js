const Redis = require('ioredis');
const redisConfig = require('../config/redis.json');
const redis = new Redis({
    host: redisConfig.host,
    port: redisConfig.port,
    password: redisConfig.password,
    db: 1
});

module.exports = {
    get: async function(key){
        var result = null
        var error = null
        try{
            result = await redis.get(key);
        }catch(err){
            console.log(err)
            error = err
        }
        return [result, error]
    },
    set: async function(key, value, exp){
        var result = false
        var error = null
        try {
            await redis.set(key, value, 'EX', exp);
            result = true
        } catch (err) {
            console.log(err)
            error = err
        }
        return [result, error]
    },
    flushdb: async function(){
        var result = false
        var error = null
        try {
            await redis.flushdb();
            result = true
        } catch (err) {
            console.log(err)
            error = err
        }
        return [result, error]
    }
}
import { createClient } from 'redis';

const redisClient = createClient();

redisClient.on('connect', () => {
    console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error}`);
});

//set hash key-value in HolbertonSchools list
redisClient.hset('HolbertonSchools', 'Portland', '50', (err, reply) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(reply);
});
redisClient.hset('HolbertonSchools', 'Seattle', '80', (err, reply) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(reply);
});
redisClient.hset('HolbertonSchools', 'New York', '20', (err, reply) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(reply);
});
redisClient.hset('HolbertonSchools', 'Bogota', '20', (err, reply) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(reply);
});
redisClient.hset('HolbertonSchools', 'Cali', '40', (err, reply) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(reply);
});
redisClient.hset('HolbertonSchools', 'Paris', '2', (err, reply) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(reply);
});

// retrieve all elements stored in HolbertonSchools list
redisClient.hgetall('HolbertonSchools', (error, result) => {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log(result);
});

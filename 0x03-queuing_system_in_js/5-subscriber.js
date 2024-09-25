import { createClient } from 'redis';

const redisClient = createClient();

//connect to redis server
redisClient.on('connect', () => {
    console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error.message}`);
});

//subscribe to holberton school channel
redisClient.subscribe('holberton school channel');

//listen for messages on channel and print message when received
redisClient.on('message', (channel, message) => {
    console.log(`${message}`);
    if (message === 'KILL_SERVER') {
        //unsubscribe from channel and cancel server connection
        redisClient.unsubscribe('holberton school channel');
        redisClient.end(true);
    }
});

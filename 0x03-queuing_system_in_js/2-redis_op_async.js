import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
});

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, (err, reply) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(reply);
    });
}

const get = promisify(client.get).bind(client);

async function displaySchoolValue(schoolName) {
    try {
        const result = await get(schoolName);
        console.log(result);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
